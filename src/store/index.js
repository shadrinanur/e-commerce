import { createStore } from "vuex";
import auth from "./modules/auth";
import merk from "./modules/merk";
import produk from "./modules/produk";
import kategori from "./modules/kategori";
import user from "./modules/user";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        merk,
        produk,
        kategori,
        user,
   },
});

export default store;
