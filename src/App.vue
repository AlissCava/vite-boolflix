<script >
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import FilmList from './components/FilmList.vue'

export default {
  components: {
    AppHeader,
    FilmList
  }
}
</script>

<template>
  <AppHeader />
  <FilmList />
</template>

<style scoped>

</style>
