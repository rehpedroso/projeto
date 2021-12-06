<template>
    <div>
        <h1>{{title}}</h1>
        <v-row>
            <v-col
                v-for="(data,i) in myCard" 
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

export default {
    data(){
        return{
            titleview: store.state.title
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
}
</script>


