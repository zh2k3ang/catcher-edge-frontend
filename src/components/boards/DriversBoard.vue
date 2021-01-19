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
      return this.$store.state.things.filter(function(thing) {
        return thing.type == 'driver'
      })
    }
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>