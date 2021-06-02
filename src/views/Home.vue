<template>
  <div>
    <Welcome />
    <Footer />
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";
import Footer from "../components/FooterAbsolute.vue";
export default {
  name: "Home",

  components: {
    Welcome,
    Footer,
  },
  mounted() {
    document.title = "Home | Health Site";
  },
};
</script>
