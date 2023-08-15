import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
import Beranda from "../views/Beranda.vue";

const routes = [ 
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/beranda",
        name: "Beranda",
        component: Beranda,
    },
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;