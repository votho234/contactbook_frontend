import { def } from "@vue/shared";
import { createRouter , createWebHistory } from "vue-router";
import ContactBook from '../views/ContactBook.vue';

const routes = [
    {path: "/", component: ContactBook, name: "contactbook"},
    // {path: '/:pathMatch(.*)*', name: 'notfound', component: () => import("@/views/NotFound.vue"),},
];

const router = createRouter({
    history: createWebHistory (),
    routes,
});

export default router;
