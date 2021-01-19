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
  },
  methods: {
    getThings: function() {
      this.axios.get('/api/things')
        .then(response=>{
          this.$store.commit('updateThings', response.data);
        })
    }
  },
  mounted: function() {
    this.getThings();
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
