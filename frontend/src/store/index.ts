import Vuex, { createLogger, createStore } from 'vuex';
import {authModule} from './modules/auth.module';

const debug = import.meta.env.DEV;

export const store = createStore({
    state: {
        daniel: "da"
    },
    modules: {
        auth: authModule
    },
    strict: debug,
    plugins: debug ? [ createLogger() ] : []
});

