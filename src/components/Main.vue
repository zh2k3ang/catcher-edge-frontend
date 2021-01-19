<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <!-- Board View -->
      <router-view></router-view>
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
      return {
      };
    },
  methods: {
    
  },
  
}
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>