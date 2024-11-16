import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../src/pages/HomePage.vue';


const routes = [
    { path: '/', name: 'Home-Page', component: HomePage },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;