<template>
  <el-container>
    <el-row :gutter="5">
      <el-col :span=8 v-for="thing in things" :key="thing.id"><DefaultAddon :thing="thing" /></el-col>
    </el-row>
  </el-container>
</template>

<script>
import DefaultAddon from '../things/DefaultAddon'

export default {
  components: {
    DefaultAddon
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
      let thingsMap = this.$store.state.things;
      let things = [];
      for(let id in thingsMap) {
        if(thingsMap[id].type == 'addon') {
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