<template>
  <el-container>
    <el-row :gutter="5">
      <el-col :span=8 v-for="thing in things" :key="thing.id"><DefaultDevice :thing="thing" /></el-col>
    </el-row>
  </el-container>
</template>

<script>
import DefaultDevice from '../things/DefaultDevice'

export default {
  components: {
    DefaultDevice
  },
  data() {
    return {
    };
  },
  methods: {
    
  },
  computed: {
    things: function() {
      // filter device thing
      let thingsMap = this.$store.state.things;
      let things = [];
      for(let id in thingsMap) {
        if(thingsMap[id].type != 'rule' && thingsMap[id].type != 'driver' && thingsMap[id].type != 'addon' && thingsMap[id].type != 'system') {
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