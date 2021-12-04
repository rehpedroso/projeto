<template>
    <div>
        <h1>{{titleview}}</h1>
        <v-row>
            <v-col
                v-for="(n,i) in 6"
                :key="n"
                cols="12"
                sm="6"
                md="4"
                xs="2"
            >
            <MyCard :id=i></MyCard>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import MyCard from '../components/MyCard'
import store from '../store'

export default {
    name: 'Favoritos',
    data(){
        return{
            titleview: store.state.title
        }
    },
    components: {
        MyCard,
    },
}
</script>


