import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';
import router from './router';
import {store} from './store/index';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        }
      },
      theme: {
        themes: {
          light: {
            colors: {
              primaryFontColor: "FFFFFF"
            }
          },
          dark: {
            colors: {
              primaryFontColor: "FFFFFF"
            }
          },
        },
      }
  })

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);


app.config.errorHandler = (err) => {
    console.error(err);
}


app.mount('#app');
