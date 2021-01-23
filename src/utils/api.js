import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui';

var ws;
export function initWebSocket() {
  let url = "ws://127.0.0.1:8001";
  ws = new WebSocket(url);
  ws.onopen = function() {
    console.log("hand shake success")
    ElementUI.Message({
      message: '成功连接到catcher',
      type: 'success'
    })
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
    ElementUI.Message.error("与catcher断开连接");
  };

}

export function socketSend(message) {
  ws.send(JSON.stringify(message))
}


export function getThings() {
  axios.get('/api/things')
    .then(response=>{
      store.commit('updateThings', response.data);
    }).catch(()=>{
      ElementUI.Message({
        message: '从catcher拉取数据失败',
        type: 'error',
        duration: 1000
      })
    })
}

export function callThingService(id, service, params) {
  axios.post('/api/thing/'+id+'/call/'+service, params)
  .then(()=>{
    ElementUI.Message({
      message: '调用成功',
      type: 'success',
      duration: 1000
    })
  })
  .catch((error)=>{
    ElementUI.Message({
      message: '调用失败, '+error,
      type: 'error',
      duration: 1000
    })
  })
}