import './style.css';

import { inject } from '@vercel/analytics';
import { createApp } from 'vue';

import App from './App.vue';

inject();
// Alternatively I could import the entire library using this plugin
// import UiLibPlugin from './UiLibPlugin';

createApp(App)
  // .use(UiLibPlugin)
  .mount('#app');
