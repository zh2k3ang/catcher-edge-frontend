<template>
  <el-container>
    <div v-for="thing in things" :key="thing.id" style="width: 100%">
      <DefaultRule :thing="thing"/>
    </div>
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