require('./bootstrap');

// import {createApp} from 'vue'
import Vue from 'vue/dist/vue'

window.Vue = Vue;
import App from './App.vue'
import router from './router'

const app = new Vue({
	el:'#app',
	router,
	render: h=>h(App)
})
// const app = new Vue({
//     components: {App}
//   }).$mount('#app')
// createApp(App).use(router).mount('#app')








































// require('./bootstrap');

// import Vue from 'vue/dist/vue'

// //window.Vue = require('vue');

// window.Vue = Vue
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

// Vue.component('home-page', require('./components/Home.vue').default);

// const app = new Vue({
// 	el: '#app',
// });

// // import App from './App.vue';
// // import Home from './components/Home.vue';
// // import VueAxios from 'vue-axios';
// // import axois from 'axios';
// // import VueRoute from 'vue-router';
// // Vue.use(VueRoute);

// // Vue.use(VueAxios,axois);

// // const routes = [
// //     {
// //         name: '/',
// //         path: '/',
// //         component: Home
// //     }

// // ];

// // const router = new VueRoute({routes: routes})

// // const app =new Vue(Vue.util.extend(App)).$mount('#app');