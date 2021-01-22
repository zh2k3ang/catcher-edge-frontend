<template>
  <el-container>
    <el-container>
    <el-row :gutter="5">
      <el-col :span=8 v-for="thing in things" :key="thing.id"><DefaultRule :thing="thing" /></el-col>
    </el-row>
  </el-container>
  </el-container>
</template>

<script>
import DefaultRule from '../things/DefaultRule'

export default {
  components: {
    DefaultRule
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
      return this.$store.state.things.filter(thing => {
        return thing.type == 'rule';
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