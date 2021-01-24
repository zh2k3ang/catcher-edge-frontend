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
        state.things.find((thing)=>thing.id == payload.id)
                    .properties
                    .find((property)=>property.name == payload.property)
                    .value = payload.newValue;
      } else if(payload.newState != undefined) {
        state.things.find((thing)=>thing.id == payload.id)
                    .state = payload.newState;
      }
    },
    updateThingState: function(state, payload) {
        state.things.find((thing)=>thing.id == payload.id)
                    .state = payload.newState;
    },
    updateThingProperty: function(state, payload) {
      state.things.find((thing)=>thing.id == payload.id)
                    .properties
                    .find((property)=>property.name == payload.property)
                    .value = payload.newValue;
    },
  }
})

