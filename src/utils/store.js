import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // used for components communicating
    things: []
  },

  mutations: {
    updateThings: function(state, payload) {
      state.things = payload
    },
  }
})

