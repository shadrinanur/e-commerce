<template>
    <center>
    <div class="m-10 max-w-sm">
  <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <div class="relative mx-auto w-36 rounded-full">
      <img class="mx-auto h-auto w-full rounded-full" src="../assets/logo.png" alt="" />
    </div>
    <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{user.name}}</h1>
    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">{{user.email}}</h3> 
    <h3 class="font-lg text-semibold text-center leading-6 text-gray-600"> {{ }}</h3>
   </div>
</div>
</center>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters("auth", ["getUser"] ),
        ...mapGetters('auth',['gettersUserAddress']),
        user() {
            return this.getUser;
        },
        address() {
            return this.gettersUserAddress;
        },
    },
    methods: {
        ...mapActions("auth", ["getUserInfo"]),
        ...mapActions('auth', ['getUserAddress']),
    },
    async mounted() {
        // Fetch user information
        const user = await this.getUserInfo();
    
        if (user) {
             this.$store.commit("auth/SET_USER", user);
        } 
    },

    created() {
        this.getUserInfo();
    }
};
</script>