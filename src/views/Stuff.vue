<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col md="4" offset-md="1">
          <v-img
            lazy-src="https://res.cloudinary.com/tofumarket/image/upload/c_thumb,w_200,g_face/v1622650471/Demo-HealthSite/content1.jpg"
            src="../assets/content1.jpg"
          ></v-img>
        </v-col>
        <v-col md="6">
          <v-card>
            <v-card-title>Content 1</v-card-title>
            <v-card-text
              >Suspendisse sollicitudin erat in quam scelerisque, eget malesuada
              urna facilisis. Integer mi est, aliquam ac ipsum et, molestie
              convallis turpis. Nunc sed feugiat ligula. Ut facilisis risus non
              sem efficitur, vitae ornare justo condimentum. Sed at tempor
              libero. Phasellus ut hendrerit odio, ut imperdiet diam. Phasellus
              cursus, augue vitae vulputate facilisis, purus elit tincidunt
              magna, eu mattis dolor nisi vel orci.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" class="hidden-md-and-up">
          <v-img
            lazy-src="https://res.cloudinary.com/tofumarket/image/upload/c_thumb,w_200,g_face/v1622650472/Demo-HealthSite/content2.jpg"
            src="../assets/content2.jpg"
          ></v-img>
        </v-col>
        <v-col md="6" offset-md="1">
          <v-card>
            <v-card-title>Content 2</v-card-title>
            <v-card-text
              >Suspendisse vel molestie metus. Integer libero sapien, aliquet ut
              augue sed, iaculis laoreet nisl. Morbi porttitor vulputate
              fringilla. Phasellus vel sapien velit. Sed sollicitudin feugiat
              varius. Maecenas fringilla mauris at purus pretium, in imperdiet
              mauris pellentesque. Integer vel libero gravida magna porttitor
              vulputate ac et odio.
              <br />
              <br />
              <h3>Random List of Stuff</h3>
              <ul>
                <li>stuff 1</li>
                <li>stuff 2</li>
                <li>stuff 3</li>
                <li>stuff 4</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4" class="hidden-sm-and-down">
          <v-img
            lazy-src="https://res.cloudinary.com/tofumarket/image/upload/c_thumb,w_200,g_face/v1622650472/Demo-HealthSite/content2.jpg"
            src="../assets/content2.jpg"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" offset-md="1">
          <v-img
            lazy-src="https://res.cloudinary.com/tofumarket/image/upload/v1622650471/Demo-HealthSite/content3.jpg"
            src="../assets/content3.jpg"
          ></v-img>
        </v-col>
        <v-col md="6">
          <v-card>
            <v-card-title>Content 3</v-card-title>
            <v-card-text
              >Proin eu enim blandit, mollis justo quis, malesuada ante.
              Maecenas aliquet sem in tellus faucibus volutpat. Nam blandit
              eleifend vulputate. Nulla faucibus fringilla felis eget accumsan.
              Maecenas ornare erat eu sapien aliquet suscipit. Donec non elit
              sed lacus imperdiet gravida eu quis tellus. Sed semper ultrices
              tortor sed placerat. <br />
              Proin eu enim blandit, mollis justo quis, malesuada ante. Maecenas
              aliquet sem in tellus faucibus volutpat. Nam blandit eleifend
              vulputate. Nulla faucibus fringilla felis eget accumsan. Maecenas
              ornare erat eu sapien aliquet suscipit. Donec non elit sed lacus
              imperdiet gravida eu quis tellus. Sed semper ultrices tortor sed
              placerat.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Stuff",
  components: {
    Footer,
  },
};
</script>
