import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 5,
    token:'text'
  },
  getters: {
		getCounter: state => {
			return [state.count, state.token]
    },
    getToken: state => {
			return state.token
		}
	},
  mutations: {
    increment (state) {
			state.count++	
		},
		decrement (state) {
			if(state.count > 0) {
				state.count--
			}
    },
    setter(state, n){
      state.token=n
    }
  },
  actions: {
  },
  modules: {
  }
})
