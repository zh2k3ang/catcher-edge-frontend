<template>
  <el-container>
    尚未支持Driver操作
    <!-- <el-row :gutter="5">
      <el-col :span=8 v-for="thing in things" :key="thing.id"><DefaultDriver :thing="thing" /></el-col>
    </el-row> -->
  </el-container>
</template>

<script>

export default {
  components: {
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
        return thing.type == 'dirver';
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