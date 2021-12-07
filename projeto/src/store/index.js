import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: ['Thinker Bell', 'Thinker Bell e o tesouro perdido', 'Thinker Bell e o resgate das fadas', 'Thinker Bell - O segredo das fadas', 'Thinker Bell - Fadas e Piratas', 'Thinker Bell e o monstro da terra do nunca'],
        title: "Festival",
        events: [],
    },
    mutations: {
        SET_EVENTS(state, payload){
            state.events=payload
        }
    },
    actions: {
        fetchEvents({commit}){
            axios.get('https://agenda-balaguer.herokuapp.com/api/event')
                .then(res=>{
                    const payload = res.data.values
                    commit('SET_EVENTS',payload)
                })
                .catch(err=>{console.log(err)})
        }
    },
    getters: {
        bigTitle(state) {
            return state.title.toUpperCase()
        }
    },
})