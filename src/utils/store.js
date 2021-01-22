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
    updateThing: function(state, payload) {

      // find state/property in thing and update
      if(payload.property!=undefined) {
        let tIdx = state.things.findIndex((thing)=>thing.id == payload.id);
        let pIdx = state.things[tIdx].properties.findIndex((property)=>property.name == payload.property)
        state.things[tIdx].properties[pIdx].value = payload.newValue;
      } else if(payload.newState != undefined) {
        let tIdx = state.things.findIndex((thing)=>thing.id == payload.id);
        state.things[tIdx].state = payload.newState;
      }
    }
  }
})

