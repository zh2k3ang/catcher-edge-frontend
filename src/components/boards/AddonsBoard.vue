<template>
  <el-container>
    尚未支持Addon操作
    <!-- <el-row :gutter="5">
      <el-col :span=8 v-for="thing in things" :key="thing.id"><DefaultAddon :thing="thing" /></el-col>
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

      return this.$store.state.things.filter(thing => {
        return thing.type == 'addon';
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