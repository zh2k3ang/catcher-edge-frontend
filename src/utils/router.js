import VueRouter from 'vue-router'
import Vue from 'vue'
import DevicesBoard from '../components/boards/DevicesBoard'
import RulesBoard from '../components/boards/RulesBoard'
import DriversBoard from '../components/boards/DriversBoard'
import AddonsBoard from '../components/boards/AddonsBoard'
import DeviceConfigBoard from '../components/boards/DeviceConfigBoard'
import RuleConfigBoard from '../components/boards/RuleConfigBoard'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/devices'
  },
  { 
    path: '/devices', 
    name: 'devicesBoard',
    component: DevicesBoard,
  },
  { 
    path: '/rules', 
    name: 'rulesBoadr',
    component: RulesBoard 
  },
  { 
    path: '/drivers', 
    name: 'driversBoard',
    component: DriversBoard 
  },
  { 
    path: '/addons', 
    name: 'addonsBoard',
    component: AddonsBoard 
  },
  { 
    path: '/device/config', 
    name: 'deviceConfig',
    component: DeviceConfigBoard 
  },
  { 
    path: '/rule/config', 
    name: 'ruleConfig',
    component: RuleConfigBoard
  },

]

export default new VueRouter({
  routes
})
