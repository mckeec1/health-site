<template>
  <div>
    <NutritionInformation :cardObj="cardObj" />
    <Footer />
  </div>
</template>
<script>
import NutritionInformation from "../components/NutritionInformation.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Nutrition",
  components: {
    NutritionInformation,
    Footer,
  },
  data() {
    return {
      cardObj: [
        {
          title: "some content",
          text: "Spicy jalapeno bacon ipsum dolor amet short ribs pork belly cupim, tenderloin pancetta jowl ham hock cow venison tail pork chop ground round. Rump tenderloin turducken alcatra cupim, doner shank boudin flank picanha chuck. Strip steak jerky cow filet mignon pancetta, prosciutto alcatra t-bone brisket burgdoggen. Capicola short ribs fatback ball tip, brisket andouille sausage beef meatloaf. Turkey drumstick hamburger burgdoggen chuck cupim picanha kielbasa prosciutto meatball beef ribs bresaola. Ham hock strip steak buffalo shank, landjaeger pig biltong burgdoggen cupim chicken frankfurter. Beef t-bone tenderloin rump pig corned beef.",
          number: 1,
          buttons: {
            text: "Bacon",
            link: "https://google.com",
            number: 1,
          },
        },
        {
          title: "more content",
          text: "Bacon pork belly pork jerky hamburger, ball tip tenderloin short ribs chislic brisket drumstick pig biltong ribeye turkey. Shoulder picanha boudin shank sausage tri-tip kielbasa tongue ham alcatra pig ribeye meatball ground round. Short loin bresaola pig tongue ribeye brisket shankle jowl ham hock tenderloin picanha. Prosciutto ribeye ham hock leberkas filet mignon alcatra, pastrami turducken beef ribs swine ground round. Cow flank ball tip fatback rump, corned beef ground round turkey meatball pork loin. Beef ribs capicola meatloaf ribeye chicken venison fatback. Meatloaf turducken leberkas boudin.",
          number: 2,
          buttons: {
            text: "Chorizo",
            link: "https://google.com",
            number: 1,
          },
        },
        {
          title: "and even more content",
          text: "Salami rump flank, doner pancetta beef ribs frankfurter sausage kevin ground round. Chislic t-bone pork loin swine sirloin, frankfurter tail short loin porchetta. Pork venison turducken capicola. Drumstick doner sausage, landjaeger chislic ham jowl cow picanha capicola spare ribs.",
          number: 3,
          buttons: {
            text: "Ham",
            link: "https://google.com",
            number: 1,
          },
        },
      ],
    };
  },
  mounted() {
    document.title = "Nutrition | Health Site";
  },
};
</script>
