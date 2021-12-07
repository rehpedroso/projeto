<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Desenvolvimento Web</v-list-item-title>
          <v-list-item-subtitle>Projeto</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>  
        </v-list-item>  
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      prominent 
      color="blue"
    >
      <v-app-bar-nav-icon @click.stop='drawer = !drawer'></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title></v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-image</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-toolbar>
    <v-main>
      <router-view/>
    </v-main>
    <v-bottom-navigation
      :value="value"
      color="primary"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>



<script>

export default {
  name: 'App',

  components: {
  },

  data () {
    return {
      drawer: false,
      items: [
        { title: 'Página Inicial', icon: 'mdi-home', to:'/' },
        { title: 'Imagens', icon: 'mdi-image', to:'/imagens' },
        { title: 'Favoritos', icon: 'mdi-heart', to:'/favoritos' },
        { title: 'Localização', icon: 'mdi-map-marker', to:'/locate' },
      ],
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      right: null,
      value: 1,
    }
  },
};
</script>

<style>
html{
 font-family: Roboto;
}
</style>