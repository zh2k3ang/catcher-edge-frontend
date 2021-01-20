<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{thing.name}}</span>
      <el-badge type="primary" style="margin-left: 5px" :value="thing.type" />
      <span style="float: right;">state: {{thing.state}}</span>
    </div>

    <div v-if="isCollapse">
      <el-button type="text" style="float: right; margin-left: 10px" @click="open">展开</el-button>
      <span>{{thing.description}}</span>
    </div>

    <div  v-if="!isCollapse" class="complete">
      <el-table v-if="thing.properties.length!=0" :data="thing.properties" >
        <el-table-column prop="name" label="属性">
          <template slot-scope="scope">
            <el-tooltip placement="top" effect="dark">
              <div slot="content">{{scope.row.description}}</div>
              <span>{{scope.row.name}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="value" label="值"></el-table-column>
        <el-table-column prop="unitOfMeasurement" label="单位"></el-table-column>
      </el-table>

      <el-table v-if="thing.services.length!=0" :data="thing.services" >
        <el-table-column prop="name" label="服务">
          <template slot-scope="scope">
            <el-tooltip placement="top" effect="dark">
              <div slot="content">{{scope.row.description}}</div>
              <span>{{scope.row.name}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column header-align="right" align="right" label="操作">
          <template slot-scope="scope"> 
            <el-button size="mini" type="primary" @click="callService(scope.row)">调用</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-button type="text" style="float: right" @click="close">收起</el-button>
    </div>
    
    <!--dialog to get parameters-->
    <el-dialog title="请输入参数" :visible.sync="parameterDialog">
      <el-form>
        <el-form-item v-for="param in selectedSrvParams" :key="param.name" :label="param.name">
          <el-input v-model="param.value" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="parameterDialog = false">取消</el-button>
        <el-button size="mini" type="primary" @click="callServiceWithParams()">调用</el-button>
      </div>
    </el-dialog>

  </el-card>

</template>

<script>
export default {
  data() {
      return {
        isCollapse: true,
        parameterDialog: false,
        selectedSrvParams: Array,
        selectedService: String,
      };
    },
    methods: {
      open: function() {
        this.isCollapse = false;
      },
      close: function() {
        this.isCollapse = true;
      },
      callService: function(service) {
        if(service.parameters.length!=0) {
          // pop a window to get parameters
          this.selectedSrvParams = service.parameters
          this.selectedService = service.name
          this.parameterDialog = true
        } else {
          // no parameter
          // this.selectedSrvParams.length = 0
          this.axios.post('/api/thing/'+this.thing.id+'/call/'+service.name)
            .then(()=>{this.$message({
                message: '调用成功',
                type: 'success'
              })
            })
            .catch((error)=>{
              this.$message.error('调用失败, '+error)
            })
        }
      },
      callServiceWithParams: function() {
        var params = []
        this.selectedSrvParams.forEach(element => {
          params.push({
            'name': element.name,
            'type': element.type,
            'value': element.value,
          })
        });
        console.log(params)
        this.axios.post('/api/thing/'+this.thing.id+'/call/'+this.selectedService, params)
            .then(()=>{this.$message({
                message: '调用成功',
                type: 'success'
              })
            })
            .catch((error)=>{
              this.$message.error('调用失败, '+error)
            })
      }
    },
    props: {
      thing: {} 
    }
}
</script>

<style scoped>

</style>