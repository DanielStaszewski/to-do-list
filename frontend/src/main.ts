import { createApp } from 'vue';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import App from './App.vue';

import './assets/main.css';
import router from './router';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
import { firebaseConfig } from './config/firebase.config';


// Your web app's Firebase configuration

const firestoreApp = initializeApp(firebaseConfig);
const database = getDatabase(firestoreApp);

function writeUserData(userId: any, name: any ) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name
  });
}

//writeUserData("fdfds", "dupa");



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
            dark: false,
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

app.config.errorHandler = (err) => {
    console.error(err);
}


app.mount('#app');
