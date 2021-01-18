<template>
  <el-container>
    <LeftNav />
    <Main />
  </el-container>
</template>

<script>
import LeftNav from './components/LeftNav'
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    LeftNav,
    Main
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
