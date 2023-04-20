import { createRouter, createWebHistory } from  'vue-router'

import home from "./pages/home.vue";
import About from "././pages/About.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;