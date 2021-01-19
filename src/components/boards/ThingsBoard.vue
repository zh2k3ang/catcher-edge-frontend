<template>
  <el-container>
    <el-row :gutter="5">
      <el-col :span=8 v-for="thing in things" :key="thing.id"><DefaultThing :thing="thing" /></el-col>
    </el-row>
  </el-container>
</template>

<script>

import DefaultThing from '../things/DefaultThing'

export default {
  components: {
    DefaultThing,
  },
  data() {
    return {
      things: []
    };
  },
  methods: {
    getThings: function() {
      this.axios.get('/api/things')
        .then(response=>{
          console.log(response.data);
          this.things = response.data;
        })
      // var item = {
      //   id: 'light.n',
      //   state: 'a',
      //   name: 'n',
      //   properties: ['pa', 'pb'],
      //   services: ['sa', 'sb'],        
      // }
      
      // this.things = Array(20).fill(item);
    }
  },

  mounted: function() {
    this.getThings();
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
.el-col {
    margin-bottom: 5px;  
}
</style>