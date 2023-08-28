import axios from "axios";

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    loginError: null,
    // user: JSON.stringify(localStorage.getItem("user") || null),
    dataAddress: []
  },
  getters: {
    isAuthenticated: (state) => !!state.token, 
    getUser: (state) => state.user,
    getAddress: (state) => state.dataAddress,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/auth/login",
          credentials
        );
        const token = response.data.access_token;
        const user = response.data.user;
        // Save token to localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        commit("SET_TOKEN", token);
        console.log("Token saved:", token);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },

  
    // //address
    // async address({commit}, credentials) {
    //   try {
    //     const response = await axios.post(
    //       "https://ecommerce.olipiskandar.com/api/v1/checkout/get-shipping-cost/{address_id}",
    //       credentials
    //     );
    //     const token = response.data.access_token;
    //     const address = response.data.address;
    //   }
    // },
     //register
    
     async register({ commit }, credentials) {
      try {
          const response = await axios.post(
              "https://ecommerce.olipiskandar.com/api/v1/auth/signup",
              credentials
          );
          const token = response.data.access_token;
          const user = response.data.user;

          //save token
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          commit("SET_TOKEN", token);
          console.log("Token saved:", token);

          // Implement pasreToken function
          commit("SET_USER", user);
          console.log(user);

          return true;
      } catch (error) {
          console.error(error);
          return false;
      }
    },

    // info user
   async getUserInfo({ state }) {
    try {
      const response = await axios.get(
        "https://ecommerce.olipiskandar.com/api/v1/user/info",
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      return response.data.user;
    } catch (error) {
      console.error(error);
      return null;
    }
   },

   async getUserAddress({ state, commit }) {
    try { 
      const response = await axios.get(
        "https://ecommerce.olipiskandar.com/api/v1/user/addresses",
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
);
commit('SET_ADDRESS', response.data)
  return response.data;
  } catch (error) {
    console.error(error);
    return null;
    }
   },
    
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem("token");
      localStorage.removeItem("token");
      commit("SET_TOKEN", "");
      // Log token removed
      console.log("Token removed:", token);
      window.location.href = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
    SET_USER(state, user) {
      state.user = user;
      // console.log("User data stored in store:", user);
  },
  },
};

export default auth;