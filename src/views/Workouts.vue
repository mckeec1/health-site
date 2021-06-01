<template>
  <div>
    <Workout :cardObjWeights="cardObjWeights" />
    <Footer />
  </div>
</template>
<script>
import Workout from "../components/Workout.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Workouts",
  components: {
    Workout,
    Footer,
  },
  data() {
    return {
      cardObjWeights: [
        {
          title: "some content",
          text: "Bite plants hit you unexpectedly, eat the fat cats food so howl uncontrollably for no reason or eat all the power cords. Present belly, scratch hand when stroked instead of drinking water from the cat bowl, make sure to steal water from the toilet and nya nya nyan for whenever a door is opened, rush in before the human cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think, i don’t know i can’t count. Scratch my tummy actually i hate you now fight me kitty, haha you hold me hooman i scratch milk the cow, so ooooh feather moving feather! for walk on keyboard chase dog then run away. Eat plants, meow, and throw up because i ate plants. Where is it? i saw that bird i need to bring it home to mommy squirrel! bite off human's toes run as fast as i can into another room for no reason i will be pet i will be pet and then i will hiss. Chew the plant bleghbleghvomit my furball really tie the room together shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff and chew iPad power cord. Poop on grasses loves cheeseburgers, sees bird in air, breaks into cage and attacks creature for jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans for purr like an angel so eat grass, throw it back up poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls.",
          number: 1,
          buttons: {
            text: "Feline",
            link: "https://google.com",
            number: 1,
          },
        },
        {
          title: "more content",
          text: "Cough hairball, eat toilet paper hate dogs and bite off human's toes. Lounge in doorway cough hairball on conveniently placed pants i heard this rumor where the humans are our owners, pfft, what do they know?!. My left donut is missing, as is my right rub butt on table so mess up all the toilet paper. Ooh, are those your $250 dollar sandals? lemme use that as my litter box chew iPad power cord, and i like frogs and 0 gravity snuggles up to shoulders or knees and purrs you to sleep but sugar, my siamese, stalks me (in a good way), day and night . Hate dogs find empty spot in cupboard and sleep all day for give attitude, and purr when give birth so sleep. Catasstrophe kitty power and toy mouse squeak roll over meow meow you are my owner so here is a dead bird, and fall asleep on the washing machine. Pee in human's bed until he cleans the litter box run in circles destroy house in 5 seconds cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit, yet cats are fats i like to pets them they like to meow back fooled again thinking the dog likes me. Get video posted to internet for chasing red dot cat slap dog in face leave fur on owners clothes gnaw the corn cob but hunt by meowing loudly at 5am next to human slave food dispenser stare at ceiling. Claws in your leg. Eat the rubberband lick the curtain just to be annoying yet love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) fall asleep upside-down yet catto munch salmono but thinking longingly about tuna brine.",
          number: 2,
          buttons: {
            text: "Gato",
            link: "https://google.com",
            number: 1,
          },
        },
        {
          title: "and even more content",
          text: " Pretend you want to go out but then don't tweeting a baseball. Scratch the box ha ha, you're funny i'll kill you last, for hiss at vacuum cleaner yet meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think, i don’t know i can’t count but cough furball. Leave fur on owners clothes found somthing move i bite it tail and decide to want nothing to do with my owner today claws in your leg scream at teh bath kitten is playing with dead mouse. Miaow then turn around and show you my bum then cats take over the world but fall asleep upside-down in the middle of the night i crawl onto your chest and purr gently to help you sleep but hunt by meowing loudly at 5am next to human slave food dispenser but eat half my food and ask for more and catto munch salmono. This is the day murr i hate humans they are so annoying yet destroy dog take a deep sniff of sock then walk around with mouth half open for sit on the laptop. Play riveting piece on synthesizer keyboard who's the baby scratch fight an alligator and win.",
          number: 3,
          buttons: {
            text: "Katsen",
            link: "https://google.com",
            number: 1,
          },
        },
      ],
    };
  },
  mounted() {
    document.title = "Workouts | Health Site";
  },
};
</script>
