import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/HomeQ.vue';
import NewsDetail from '../views/NewsDetail.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/news/:id', component: NewsDetail },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ],
});
