import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutation'

Vue.use(Vuex)

const state = {
  jokes: []
}

export default new Vuex.Store({
  state,
  mutations
})
