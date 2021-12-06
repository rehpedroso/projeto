import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: ['Thinker Bell', 'Thinker Bell', 'Thinker Bell', 'Thinker Bell', 'Thinker Bell', 'Thinker Bell'],
        title: "Movies"
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        bigTitle(state) {
            return state.title.toUpperCase()
        }
    },
})