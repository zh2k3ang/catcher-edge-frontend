<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <ThingsBoard /> 
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Header from './Header'
import ThingsBoard from './boards/ThingsBoard'
import Footer from './Footer'

export default {
  components: {
    Header,
    ThingsBoard,
    Footer
  },
  data() {
      return {
        isCollapse: true
      };
    },
  methods: {

  }
}
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>