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
          <template>
            <el-button size="mini" type="primary" plain>调用</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-button type="text" style="float: right" @click="close">收起</el-button>
    </div>
    

  </el-card>
</template>

<script>
export default {
  data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      open: function() {
        this.isCollapse = false;
      },
      close: function() {
        this.isCollapse = true;
      }
    },
    props: {
      thing: {} 
    }
}
</script>

<style scoped>

</style>