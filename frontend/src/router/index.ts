import NextSevenDays from '@/views/NextSevenDays.vue';
import {createRouter, createWebHistory } from 'vue-router';
import MyDay from '../views/MyDay.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';


const routes = [
    {
        path: '/',
        name: "Home",
        component: MyDay
    },
    {
        path: '/register',
        name: "Register",
        component: Register
    },
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/my-day',
        name: "MyDay",
        component: MyDay
    },
    {
        path: '/next-seven-days',
        name: "NextSevenDays",
        component: NextSevenDays
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });

export default router;

