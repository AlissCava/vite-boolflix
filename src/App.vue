<script >
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import FilmList from './components/FilmList.vue'

export default {
  components: {
    AppHeader,
    FilmList
  },

  // data() {
  //     return {
  //       store,
  //   }
  // }, 

  // methods: {
  //   getMovies: function (apiParams) {
  //     axios
  //       .get(store.apiURL + 'movie', apiParams)
  //       .then ((res) => {
  //         console.log (res.data.results);
  //         store.FilmList = res.data.results;
          
  //       })
  //       .catch((err) => {
  //         console.log ("Errori", err);
  //       });
  //   }
  // }
}


</script>

<template>
  <AppHeader />
  <FilmList />
</template>

<style scoped>

</style>
