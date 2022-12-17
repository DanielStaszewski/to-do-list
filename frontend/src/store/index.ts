import Vuex, { createLogger, createStore, Store } from 'vuex';
import {authModule, type AuthState} from './modules/auth.module';

const debug = import.meta.env.DEV;

export interface AppState {
    auth: AuthState
}

export const store = createStore({
    state: {
    },
    modules: {
        auth: authModule
    },
    strict: debug,
    plugins: debug ? [ createLogger() ] : []
}) as Store<AppState>;

