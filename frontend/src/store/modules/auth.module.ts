


let user = localStorage.getItem('user');
user = user ? JSON.parse(user) : null;

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user };


export const authModule = {
    namespaced: true,
    state: initialState,
    actions: {

    },
    mutations: {

    },
    getters: {

    }   
}