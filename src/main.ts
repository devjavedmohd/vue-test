import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import the store

import './style.css'; // Global styles

const app = createApp(App);
app.use(store)
app.mount('#app');
