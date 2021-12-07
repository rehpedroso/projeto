<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://img.elo7.com.br/product/zoom/2541E38/projeto-proshow-producer-tema-tinker-bell-sininho-sininho.jpg"
    ></v-img>

    <v-card-title>{{cardInfo.title}}</v-card-title>
    <v-card-subtitle>
      {{cardInfo.description}}
    </v-card-subtitle>

  </v-card>
</template>

<script>
  export default {
    props:['id', 'cardInfo'],
    data: () =>({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
