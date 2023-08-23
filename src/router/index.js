import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
import Beranda from "../views/Beranda.vue";
import Contact from "../views/Contact.vue";
import Checkout from "../views/Checkout.vue";
import Cart from  "../views/Cart.vue";
import Merk from "../views/Merk.vue";
import Kategori from "../views/Kategori.vue";
import SingleProduk from "../views/SingleProduk.vue";
import Profile from "../views/Profile.vue";

const routes = [ 
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { requiresGuest: true },
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
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        // component: () => import("../views/Cart.vue"),
        // meta: { requiresLogin: true },

    },
    {
        path: "/merk",
        name: "Merk",
        component: Merk,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    {
        path: "/produk/:slug",
        name: "SingleProduk",
        component: SingleProduk,
        props: true
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});





export default router;