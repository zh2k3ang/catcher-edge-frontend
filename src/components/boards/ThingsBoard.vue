<template>
  <el-container>
    <el-row :gutter="20" style="width:100%">
      <el-col :span="6"><DefaultThing /></el-col>
      <el-col :span="6"><DefaultThing /></el-col>
      <el-col :span="6"><DefaultThing /></el-col>
      <el-col :span="6"><DefaultThing /></el-col>
    </el-row>
  </el-container>
</template>

<script>

import DefaultThing from '../things/DefaultThing'

export default {
  components: {
    DefaultThing,
  },
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