import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nutrition from "../views/Nutrition.vue";
import Workouts from "../views/Workouts.vue";
import SignUp from "../views/SignUp.vue";
import Contact from "../views/Contact.vue";
import Stuff from "../views/Stuff.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/nutrition",
    name: "Nutrition",
    component: Nutrition,
  },
  {
    path: "/workouts",
    name: "Workouts",
    component: Workouts,
  },
  {
    path: "/sign-up",
    name: "SignUps",
    component: SignUp,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/stuff",
    name: "Stuff",
    component: Stuff,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
