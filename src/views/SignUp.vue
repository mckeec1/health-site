<template>
  <div>
    <Form :type="this.type" />
    <Footer />
  </div>
</template>
<script>
import Form from "../components/Form.vue";
import Footer from "../components/FooterAbsolute.vue";

export default {
  name: "SignUp",
  components: {
    Form,
    Footer,
  },
  data() {
    return {
      type: "sign-up",
    };
  },
  mounted() {
    document.title = "Sign Up | Health Site";
  },
};
</script>
