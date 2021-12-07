<template>
    <div>
        <h1>{{title}}</h1>
        <v-btn @click="fetch()">MAIS INFORMAÇÕES</v-btn>
        <v-row>
            <v-col
                v-for="(data,i) in events" 
                :key="i"
                cols="12"
                sm="6"
                md="4"
                xs="2"
            >
            <MyCard :id="i" :cardInfo="data"></MyCard>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import MyCard from '../components/MyCard'
import store from '../store'
import axios from 'axios'

export default {
    data(){
        return{
            titleview: store.state.title,
            events: null,
        }
    },
    computed: {
        myCard() {
            return store.state.cards
        },
        title() {
            return store.getters.bigTitle
        }
    },
    components: {
        MyCard,
    },
    methods: {
        fetch(){
            console.log('printando')
            axios.get('https://agenda-balaguer.herokuapp.com/api/event')
            .then(res=>{
                console.log(res.data.values)
                this.events=res.data.values
            })
            .catch(err=>{console.log(err)})
        }
    }
}
</script>


