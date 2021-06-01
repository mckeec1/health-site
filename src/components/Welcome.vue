<template>
  <div>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col>
          <v-parallax style="height: 81vh" src="../assets/background.jpg">
            <v-overlay absolute>
              <v-row no-gutters>
                <v-col md="8" offset="2" class="text-center">
                  <div class="text-h2 black--text font-weight-bold">
                    At my health site we do
                  </div>
                  <div class="text-h3 black--text font-weight">TWO THINGS:</div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col md="8" offset="2">
                  <br />
                  <v-btn outlined color="green" to="/nutrition">
                    <v-icon> mdi-arrow-left-bold </v-icon>
                    Nutrition
                  </v-btn>
                  <br />
                  <br />
                  <v-btn outlined color="blue" to="/workouts">
                    Workouts
                    <v-icon> mdi-arrow-right-bold </v-icon>
                  </v-btn>
                  <br />
                  <br />
                  <v-btn outlined color="red" to="/stuff">
                    More stuff
                    <v-icon> mdi-arrow-down-bold </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-overlay>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Welcome",
  components: {},
};
</script>
<style>
.v-overlay__content {
  width: 100%;
}
</style>
