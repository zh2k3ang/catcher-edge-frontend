<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{thing.name}}</span>
      <el-badge type="primary" style="margin-left: 5px" :value="thing.type" />
      <span style="float: right;">状态: {{thing.state}}</span>
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
    <el-dialog title="请输入参数" :visible.sync="parameterDialog" width="15%">
      <el-form size="mini">
        <el-form-item  v-for="param in selectedSrvParams" :inline-message="true" :key="param.name" >
          <template slot="label">
            <span>{{param.name}}</span>
            <el-badge type="primary" style="margin-left: 5px" :value="param.type" />
          </template>
          <el-input v-model="param.value" autocomplete="off" :placeholder="param.description"></el-input>
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

import {callThingService} from '../../utils/api'

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
          callThingService(this.thing.id, service.name);
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
        callThingService(this.thing.id, this.selectedService, params);
        this.parameterDialog = false;
      }
    },
    props: {
      thing: {} 
    }
}
</script>

<style scoped>

</style>