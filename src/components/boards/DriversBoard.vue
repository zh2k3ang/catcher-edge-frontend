<template>
  <el-container>
    <el-row :gutter="5">
      <el-col :span=8 v-for="thing in things" :key="thing.id"><DefaultDriver :thing="thing" /></el-col>
    </el-row>
  </el-container>
</template>

<script>

import DefaultDriver from '../things/DefaultDriver'

export default {
  components: {
    DefaultDriver
  },
  data() {
    return {
    };
  },
  props: {

  },
  methods: {
    
  },
  computed: {
    things: function() {
      // filter device thing
      let thingsMap = this.$store.state.things;
      let things = [];
      for(let id in thingsMap) {
        if(thingsMap[id].type == 'driver') {
          things.push(thingsMap[id]);
        }
      }
      return things;
    }
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>