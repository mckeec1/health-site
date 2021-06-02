<template>
  <div class="about" style="height: 100%">
    <v-container fluid>
      <v-row class="pt-10">
        <v-col md="6" offset-md="3" style="background-color: white">
          <h1 class="pb-10">How We/I Started</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            placerat, neque nec tincidunt auctor, lectus leo commodo arcu, a
            tempor justo lectus ac urna. Donec a mollis ipsum, id semper massa.
            Quisque sollicitudin ante vitae auctor egestas. Cras et aliquet
            lacus, placerat blandit metus. Ut ex magna, suscipit quis odio vel,
            pellentesque finibus odio. Phasellus non ante ornare, imperdiet ante
            vel, ullamcorper justo.
          </p>
          <p>
            Nullam dapibus iaculis libero, id tincidunt leo scelerisque ornare.
            Duis id maximus dui. Curabitur in magna vehicula mi vulputate
            posuere. Nullam lacinia sapien odio, a interdum ante iaculis ut.
            Suspendisse in lorem convallis, blandit turpis nec, vehicula sem.
            Integer vitae suscipit nulla. Nulla facilisi. Nullam suscipit mauris
            ac vestibulum convallis. Cras laoreet diam non est scelerisque
            aliquet. Quisque vestibulum nisi sed augue egestas aliquet. Maecenas
            sagittis ipsum non tellus consequat, at consequat enim porttitor.
          </p>
          <p>
            Sed congue ac dui nec euismod. Sed laoreet justo vitae risus dictum
            vehicula. Phasellus vehicula odio sem, ac ullamcorper erat imperdiet
            eu. Vestibulum tempor velit nunc, a posuere odio imperdiet quis. Nam
            in dolor sed metus lacinia rhoncus vel a mauris. Donec finibus
            imperdiet efficitur. Nunc auctor fringilla lectus, ac commodo arcu
            rhoncus vel. Aliquam fringilla aliquet magna id vestibulum. Proin
            vulputate pharetra purus venenatis vulputate. Curabitur lobortis mi
            augue, ac iaculis neque placerat in. Etiam at iaculis leo.
          </p>
          <div class="signature">
            <br />
            <br />
            Sincerely,
            <v-img src="../assets/signature.png" max-height="100"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Footer class="hidden-md-and-up" />
    <FooterSticky class="hidden-sm-and-down" />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import FooterSticky from "../components/FooterAbsolute.vue";
export default {
  name: "About",
  components: {
    Footer,
    FooterSticky,
  },
};
</script>
<style scoped>
.about {
  background-image: url("../assets/about.jpg");
  background-position: center;
  background-repeat: no-repeat;
}
</style>
