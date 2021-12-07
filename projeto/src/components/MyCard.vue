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
      src="https://tradeturismo.com.br/wp-content/uploads/2020/06/O-que-ainda-podemos-aprender-com-festivais-de-m%C3%BAsica-internacionais-1200x565.jpg"
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
