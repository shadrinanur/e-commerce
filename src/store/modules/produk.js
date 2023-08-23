import axios from "axios";

const produk = {
    namespaced: true,
    state: {
        produkData: [],
        singleProduk : []
    },
    getters: {
        getProduk: (state) => state.produkData,

        // get single produk
        getProdukBySlug: (state) => (produkSlug) => {
            console.log("Fetching single produk by slug:", produkSlug);
            console.log("ProdukData:", state.singleProduk);
            const produk = state.singleProduk;
            console.log("Produk:", produk);
            return produk;
        },

    },
    actions: {
        async fetchProduk({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/product/latest/12"
                );
                commit("SET_PRODUK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        // get single produk
        async fetchSingleProduk({ commit }, produkSlug) {
            try {
                const response = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/product/details/${produkSlug}`
                );
                commit("SET_SINGLE_PRODUK", response.data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUK(state, produk) {
            state.produkData = produk;
        },
        // get single prduk
        SET_SINGLE_PRODUK(state, produk) {
            state.singleProduk = produk;
        },

        SET_FILTER_PRODUK(state, produk) {
            state.filterProduk = produk;
        },
    },
};

export default produk;