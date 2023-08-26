import { createStore } from "vuex";
import auth from "./modules/auth";
import merk from "./modules/merk";
import product from "./modules/product";
import kategori from "./modules/kategori";
import user from "./modules/user";
import cart from "./modules/cart";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        merk,
        product,
        kategori,
        user,
        cart,
   },
});

export default store;
