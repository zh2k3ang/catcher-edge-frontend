<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '2']" :default-active="this.$route.path" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>控制面板</template>
        <el-menu-item-group>
          <el-menu-item index="/devices" default-active >设备</el-menu-item>
          <el-menu-item index="/rules">规则</el-menu-item>
          <el-menu-item index="/drivers">驱动</el-menu-item>
          <el-menu-item index="/addons">组件</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-setting"></i>配置</template>
        <el-menu-item-group>
          <el-menu-item index="/device/config">设备</el-menu-item>
          <el-menu-item index="/rule/config">规则</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-user"></i>开发者工具</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">测试1</el-menu-item>
          <el-menu-item index="3-2">测试2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-aside {
    color: #333;
  }
</style>