import type { User } from '@/models/user.model';
import type { Commit } from 'vuex';
import AuthService from '../../services/auth.service';

let user = localStorage.getItem('user');
user = user ? JSON.parse(user) : null;


interface AuthState {
  status: {
    loggedIn: boolean
  },
  user: User | null
}

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user };


export const authModule = {
    namespaced: true,
    state: initialState,
    actions: {
      login({ commit }: { commit: Commit }, user: User){
        return AuthService.login(user)
          .then(
            user => {
              commit("loginSuccess", user);
              return Promise.resolve(user);
            },
            error => {
              commit("loginFailed");
              return Promise.reject(error);
            }
          )
      },
      logout({ commit }: { commit: Commit }) {
        AuthService.logout();
        commit('logout');
      },
      register({ commit }: { commit: Commit }, user: User) {
        return AuthService.register(user).then(
          response => {
            commit('registerSuccess');
            return Promise.resolve(response.data);
          },
          error => {
            commit('registerFailure');
            return Promise.reject(error);
          }
        );
      }
    },
    mutations: {
      loginSuccess(state: AuthState, user: User) {
        state.status.loggedIn = true;
        state.user = user;
      },
      loginFailure(state: AuthState) {
        state.status.loggedIn = false;
        state.user = null;
      },
      logout(state: AuthState) {
        state.status.loggedIn = false;
        state.user = null;
      },
      registerSuccess(state: AuthState) {
        state.status.loggedIn = false;
      },
      registerFailure(state: AuthState) {
        state.status.loggedIn = false;
      }
    },
    getters: {

    }   
}