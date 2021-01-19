<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{thing.name}}</span>
      <el-badge type="primary" :value="thing.type" />
      <span style="float: right;">state: {{thing.state}}</span>
    </div>

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
      <el-table-column label="调用">
        <template>
          <el-button type="primary" plain>调用</el-button>
        </template>
      </el-table-column>
    </el-table>

  </el-card>
</template>

<script>
export default {
  data() {
      return {
      };
    },
    methods: {
     
    },
    props: {
      thing: {} 
    }
}
</script>

<style scoped>

</style>