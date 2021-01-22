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
      return this.$store.state.things.filter(thing => {
        return thing.type != 'rule' && thing.type != 'driver' && thing.type != 'addon' && thing.type != 'system';
      });
    }
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>