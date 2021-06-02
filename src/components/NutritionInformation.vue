<template>
  <div>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col>
          <v-parallax src="../assets/nutrition.jpg">
            <v-overlay absolute>
              <div class="text-h2 black--text">nutrition</div>
            </v-overlay>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div class="text-h3 black--text">
        title of stuff
        <br />
        <br />
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="4"
          v-for="cards in cardObj"
          v-bind:key="cards.number"
        >
          <v-card>
            <v-card-title>
              {{ cards.title }}
            </v-card-title>
            <v-card-text>
              {{ cards.text }}
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn outlined rounded text> {{ cards.buttons.text }} </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="pt-10">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <div class="text-h3 black--text pt-10">
            We can shove some stuff here
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "NutritionInformation",
  props: {
    cardObj: Array,
  },
  mounted() {},
};
</script>
