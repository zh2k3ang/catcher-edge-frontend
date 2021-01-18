<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>demo thing</span>
      <span style="float: right;">state</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'属性 ' + o }}
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'服务 ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
      return {
        
      };
    },
    methods: {
     
      }
}
</script>

<style scoped>

</style>