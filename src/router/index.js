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
import SingleProduct from "../views/SingleProduct.vue";
import Profile from "../views/Profile.vue";
import PageOrder from "../views/PageOrder.vue";

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
        component: () => import("../views/Checkout.vue"),
        meta: { requireLogin: true },
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
        path: "/singleproduct",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/order/:orderCode",
        name: "PageOrder",
        component: PageOrder,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else{
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else{
        next();
    }
});

function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }




export default router;