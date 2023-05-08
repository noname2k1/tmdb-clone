import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLazyload from 'vue-lazyload';

import App from './App.vue';
import router from './router';
import './assets/css/base.css';
import './assets/css/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueLazyload);

app.mount('#app');
