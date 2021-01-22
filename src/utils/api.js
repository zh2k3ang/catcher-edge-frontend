import axios from 'axios'
import store from './store'

var ws;
export function initWebSocket() {
  let url = "ws://127.0.0.1:8001";
  ws = new WebSocket(url);
  ws.onopen = function() {
    console.log("hand shake success")
  };
  ws.onmessage = function(e) {
    // update things
    store.commit('updateThing', JSON.parse(e.data))
  };
  ws.onclose = function() {
    console.log("socket closed")
  };
  ws.onerror = function() {
    console.log("socket error")
  };

}

export function socketSend(message) {
  ws.send(JSON.stringify(message))
}


export function getThings() {
  axios.get('/api/things')
    .then(response=>{

      let things = {}
      response.data.forEach(thing => {
        things[thing.id] = thing
      });
      console.log(things)
      store.commit('updateThings', things);
    })
}