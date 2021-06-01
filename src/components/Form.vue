<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col md="8">
        <v-card>
          <v-card-title v-if="this.type == 'sign-up'"> Sign Up </v-card-title>
          <v-card-title v-if="this.type == 'contact'">
            Contact Us
          </v-card-title>
          <v-card-text>
            Here you can sign up for classes or stuff. Basically we can have it
            say something about what they are signing up for vs the contact page
            itself.
            <v-divider style="pb-10"></v-divider>
            <v-form ref="form">
              <v-text-field label="Name"> </v-text-field>
              <v-text-field label="Email"> </v-text-field>
              <v-text-field label="Phone"> </v-text-field>
              <v-text-field v-if="this.type == 'sign-up'" label="Class Level">
              </v-text-field>
              <v-text-field v-if="this.type == 'contact'" label="Message">
              </v-text-field>
              <v-text-field
                v-if="this.type == 'sign-up'"
                label="Any other details"
              >
              </v-text-field>
              <v-btn color="success" class="mr-4"> Submit </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Form",
  props: {
    type: String,
  },
  mounted() {
    console.log(this.type);
  },
};
</script>
