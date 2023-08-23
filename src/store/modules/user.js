import axios from "axios";

const user = {
    namespaced: true,
    state: {
        userData: [],
    },
    getters: {
        getUser: (state) => state.userData,
    },
    actions: {
        async fetchUser ({ commit }) {
            try {
                const token = localStorage.getItem('token')
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/info"
                );
                commit("SET_USER", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PROFILE(state, user) {
            state.userData = user;
        },
    },
};

export default user;