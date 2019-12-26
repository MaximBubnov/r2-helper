import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from "../views/Hello";
import UsersList from "../views/UsersList";
import Timer from "../components/Timer";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/hello', component: Hello},
    {path: '/time', component: Timer}
  ]
})
