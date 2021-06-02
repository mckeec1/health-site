<template>
  <v-app>
    <v-app-bar app light>
      <v-toolbar-title>
        <v-btn text color="primary" class="v-btn--active" to="/">
          [ Healthy Life ]
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="nav in menu" :key="nav.num" :to="nav.link" depressed>
          {{ nav.title }}
        </v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute top temporary app>
      <v-list nav>
        <v-list-item v-for="link in menu" :key="link.num" link :to="link.link">
          <v-list-item-content>
            <v-list-item-title>
              {{ link.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { title: "Home", link: "/", num: 1 },
        { title: "About", link: "/about", num: 2 },
        { title: "Sign Up", link: "/sign-up", num: 3 },
        { title: "Contact Me!", link: "/contact", num: 4 },
      ],
      drawer: false,
    };
  },
  methods: {
    menuItems() {
      return this.menu;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.v-btn-exact-active {
  color: #42b983;
}
</style>
