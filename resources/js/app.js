import './bootstrap';

import { createApp } from 'vue';
import App from './layouts/App.vue';
import store from './store'



import router from './router.js';


createApp(App).use(router,store).mount('#app');
    
