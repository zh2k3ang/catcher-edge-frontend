<template>
  <el-card class="box-card">
    <div slot="header">
      <span>{{thing.name}}</span>
      <el-badge type="primary" style="margin-left: 5px" :value="thing.type" />
      <el-switch v-model="state" active-color="#13ce66" inactive-color="#ff4949" style="float: right" @change="toggle"></el-switch>
    </div>

    <div v-if="isCollapse">
      <el-button type="text" style="float: right; margin-left: 10px" @click="open">展开</el-button>
      <span>{{thing.description}}</span>
    </div>

    <div v-if="!isCollapse">

      <el-table :data="events">
        <el-table-column label="Event">
          <template slot-scope="scope">
            {{scope.row}}
          </template>
        </el-table-column>
      </el-table>
      
      <el-table :data="conditions" >
        <el-table-column label="Conditions">
          <template slot-scope="scope">
            {{scope.row}}
          </template>
        </el-table-column>
      </el-table>

      <el-table :data="actions" >
        <el-table-column label="Actions">
          <template slot-scope="scope">
            {{scope.row}}
          </template>
        </el-table-column>
      </el-table>
      <el-button type="text" style="float: right" @click="close">收起</el-button>
    </div>
    

  </el-card>
</template>

<script>

import {callThingService} from '../../utils/api'

export default {
  data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      open: function() {
        this.isCollapse = false;
      },
      close: function() {
        this.isCollapse = true;
      },

      toggle: function() {
        callThingService(this.thing.id, "toggle");
      }
    },
    props: {
      thing: {} 
    },
    computed: {

      state:  {
        get() {return this.thing.state == 'on'},
        set() {} // there will be an error if no set()
      },
      
      events: function() {
        let events = []
        events.push(this.thing.properties.find((prop=>{
          return prop.name == 'event';
        })).value);
        return events;
      },
      conditions: function() {
        return this.thing.properties.find((prop=>{
          return prop.name == 'conditions';
        })).value.split('\n');
      },
      actions: function() {
        return this.thing.properties.find((prop)=>{
          return prop.name == 'actions';
        }).value.split('\n');
      }
    }
}
</script>

<style scoped>

</style>