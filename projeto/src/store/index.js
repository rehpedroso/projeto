import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: ['Thinker Bell', 'Thinker Bell e o tesouro perdido', 'Thinker Bell e o resgate das fadas', 'Thinker Bell - O segredo das fadas', 'Thinker Bell - Fadas e Piratas', 'Thinker Bell e o monstro da terra do nunca'],
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