<template>
  <el-container>
    <LeftNav />
    <Main />
  </el-container>
</template>

<script>
import LeftNav from './components/LeftNav'
import Main from './components/Main'
import {initWebSocket} from './utils/api'
export default {
  name: 'App',
  components: {
    LeftNav,
    Main
  },
  methods: {
    


    
  },
  mounted: function() {
    // create websocket to sync data
    initWebSocket();
  }
}
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .el-container {
    height: 100%;
    width: 100%;
  }
</style>
