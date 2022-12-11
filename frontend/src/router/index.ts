import NextSevenDays from '@/views/NextSevenDays.vue';
import {createRouter, createWebHistory } from 'vue-router';
import MyDay from '../views/MyDay.vue';


const routes = [
    {
        path: '/',
        name: "Home",
        component: MyDay
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

export default router;

