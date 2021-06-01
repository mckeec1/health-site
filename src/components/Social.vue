<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-btn color="primary" @click="socialClick(1)" text icon
          ><v-icon> mdi-facebook </v-icon></v-btn
        >
        <v-btn color="brown" @click="socialClick(2)" text icon
          ><v-icon> mdi-instagram </v-icon></v-btn
        >
        <v-btn color="primary" @click="socialClick(3)" text icon
          ><v-icon> mdi-twitter </v-icon></v-btn
        >
        <v-btn color="red" @click="socialClick(4)" text icon
          ><v-icon> mdi-email </v-icon></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Social",
  methods: {
    socialClick: function (num) {
      let socialType = ["Facebook", "Instagram", "Twitter", "email"];

      if (num == 1)
        alert(
          "These dont work yet but once we have links they will redirect to your " +
            socialType[0]
        );

      if (num == 2)
        alert(
          "These dont work yet but once we have links they will redirect to your " +
            socialType[1]
        );

      if (num == 3)
        alert(
          "These dont work yet but once we have links they will redirect to your " +
            socialType[2]
        );

      if (num == 4)
        alert(
          "These dont work yet but once we have links they will redirect to your " +
            socialType[3] +
            " client"
        );
    },
  },
};
</script>
