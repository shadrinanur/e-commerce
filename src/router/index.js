import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Produk from "../views/Produk.vue";
import Beranda from "../views/Beranda.vue";
import Contact from "../views/Contact.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Checkout from "../views/Checkout.vue";
import Cart from  "../views/Cart.vue";
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
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/singleproduct",
        name: "SingleProduct",
        component: SingleProduct,
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
    },
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;