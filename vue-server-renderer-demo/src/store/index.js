import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
import { getBeiJingWeather } from '../api'

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem ({ commit }) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        console.log(1);
        // return getBeiJingWeather().then(item => {
        //     console.log(2);
        //     commit('setItem', { id, item })
        // }).catch(error=>{
        //   console.log(error,'getBeiJingWeather');
        // })
        return new Promise(resolve=>{
          resolve({item:1})
        }).then(item=>{
          console.log(2);
          console.log(item);
          commit('setItem',  item )
        })
      }
    },
    mutations: {
      setItem (state, item) {
        // Vue.set(state.items, id, item)
        console.log(3)
        // Vue.set(state.items, item)
        state.items = item
      }
    }
  })
}