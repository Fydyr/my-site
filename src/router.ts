import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/HomeView.vue'
import Teapot from './views/418View.vue';
import Project from './views/ProjectView.vue';
import Contact from './views/ContactView.vue';

const routes =[
  {path: '/', component: Home},
  {path: '/my-site', component: Home},
  {path: '/biscuit', component: Teapot},
  {path: '/my-site/biscuit', component: Teapot},
  {path: '/project', component: Project},
  {path: '/my-site/project', component: Project},
  {path: '/contact', component: Contact},
  {path: '/my-site/contact', component: Contact},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
