import type { User } from "@/models/user.model";
import tokenService from "@/services/token.service";
import type { Commit } from "vuex";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";

let user = localStorage.getItem("user") as unknown;
user = user ? (JSON.parse(user as string) as User) : null;

export interface AuthState {
  status: {
    loggedIn: boolean;
  };
  user: User | null;
}

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user };

export const authModule = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }: { commit: Commit }, user: {email: string, password: string}) {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailed", error);
          return Promise.reject(error);
        }
      );
    },
    refreshToken({ commit }: {commit : Commit}, accessToken: string){
      commit("refreshToken", accessToken);
    },
    logout({ commit }: { commit: Commit }) {
      AuthService.logout();
      commit("logout");
    },
    register({ commit }: { commit: Commit }, user: User) {
      return AuthService.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailed");
          return Promise.reject(error);
        }
      );
    },
    uploadUserImage({ commit }: { commit: Commit }, formData: FormData) {
      const userId = (authModule.state.user as User).id;
      formData.append("userId", userId);
      if (!userId) return;
      return UserService.uploadUserImage(formData).then(
        (response) => {
          commit("uploadUserImageSuccess", response.data);
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("uploadUserImageFailed");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state: AuthState, user: User) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailed(state: AuthState) {
      state.status.loggedIn = false;
      state.user = null;
    },
    refreshToken(state: AuthState, accessToken: string){
      state.status.loggedIn = true;
      state.user = {
        ...state.user,
        accessToken: accessToken
      } as User;
    },
    logout(state: AuthState) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state: AuthState) {
      state.status.loggedIn = false;
    },
    registerFailed(state: AuthState) {
      state.status.loggedIn = false;
    },
    uploadUserImageSuccess(state: AuthState, response: {message: string, image: string}) {
      if(!state.user) return;
      state.user.image = response.image;
      tokenService.setUser(state.user);
    },
  },
  getters: {
    getUser(state: AuthState): User | null {
      return state.user;
    },
  },
};
