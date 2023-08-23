<template>
    <h1 class="mb-8 text-center font-sans text-5xl font-bold mt-5">Kategori</h1>
        <div class="grid grid-cols-4 gap-4">
            <div class=" flex flex-container" v-for="kategori in getKategori.data">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img :src="kategori.banner" className="rounded-xl" />
                        </figure>
                            <div className="card-body items-center text-center">
                            <h2 className="card-title">{{ kategori.name }}</h2>
                            <p>{{ kategori.slug }}</p>
                             <div className="card-actions">
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
  computed: {
  ...mapGetters('kategori', ['getKategori']),
  },
  methods: {
  ...mapActions('kategori', ['fetchKategori']),
  },
  created() {
  this.fetchKategori();
  },
  }
  </script>