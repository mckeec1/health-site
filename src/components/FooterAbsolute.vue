<template>
  <v-footer absolute padless>
    <v-row justify="center" no-gutters>
      <Social />
      <v-col class="py-4 text-center black--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Healthy Site</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import Social from "./Social.vue";
export default {
  name: "FooterAbsolute",
  components: {
    Social,
  },
};
</script>
