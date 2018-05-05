import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})

export default store
