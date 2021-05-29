// import {createRouter, createHistory } from 'vue-router'
import Vue from 'vue/dist/vue'

window.Vue = Vue;
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import Home from '../components/Home.vue';
import ContactList from '../components/ContactList.vue';

const routes = [
    {
        
        path: '/',
        component: Home,
        name: "Home",
    },
    {
       
        path: '/contact',
        component: ContactList,
        name: "ContactList",
    }

];

// const router = createRouter({routes})
const router = new VueRouter({ mode: 'history',
routes// short for `routes: routes`
      })
export default router