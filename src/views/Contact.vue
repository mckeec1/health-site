<template>
  <div>
    <Form :type="this.type" />
    <Footer />
  </div>
</template>
<script>
import Form from "../components/Form.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Form,
    Footer,
  },
  data() {
    return {
      type: "contact",
    };
  },
  mounted() {
    document.title = "Contact Us | Health Site";
  },
};
</script>
