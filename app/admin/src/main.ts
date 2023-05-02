import './style.css';

import { inject } from '@vercel/analytics';
import { createApp } from 'vue';

import App from './App.vue';

inject();
createApp(App).mount('#app');
