<template>
  <v-app>
    <v-app-bar app light>
      <v-toolbar-title>
        <v-btn text color="primary" class="v-btn--active" to="/">
          [ Healthy Life ]
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed to="/">Home</v-btn>
        <v-btn depressed to="/about">About</v-btn>
        <v-btn depressed to="/sign-up">Sign Up</v-btn>
        <v-btn depressed to="/contact">Contact Me!</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({}),
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
