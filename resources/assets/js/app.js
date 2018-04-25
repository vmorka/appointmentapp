
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('home', require('./components/Home.vue'));
Vue.component('reg-login', require('./components/RegLogin.vue'));
Vue.component('login-form', require('./components/LoginForm.vue'));
Vue.component('client-form', require('./components/ClientRegForm.vue'));
Vue.component('company-form', require('./components/CompanyRegForm.vue'));
Vue.component('users', require('./components/Users.vue'));

const app = new Vue({
    el: '#app'
});
