<template>
  <el-container style="height: 100%; width: 100%">
    <LeftNav />
    <MainBoard />
  </el-container>
</template>

<script>
import LeftNav from './components/LeftNav'
import MainBoard from './components/MainBoard'
export default {
  name: 'App',
  components: {
    LeftNav,
    MainBoard
  }
}
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
  }
</style>
