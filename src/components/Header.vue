<template>
  <el-container>
    <div style="width:100%">
      <span>Catcher, integrate everything</span>
      <div style="float: right">
        <el-button type="primary" icon="el-icon-refresh" circle @click="refresh"></el-button>
      </div>
    </div>
  </el-container>
</template>

<script>

import {initWebSocket,getThings} from '../utils/api'

export default {
  name: 'Header',

  data() {
      return {
        isCollapse: true
      };
    },
  methods: {
    refresh: function() {
      initWebSocket();
      getThings();
    }
  }
}
</script>

<style scoped>

</style>