import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // used for components communicating
    things: {}  // id -> thing object
  },

  mutations: {
    updateThings: function(state, payload) {
      state.things = payload
    },
    updateThing: function(state, payload) {
      console.log(payload)
    }
  }
})

