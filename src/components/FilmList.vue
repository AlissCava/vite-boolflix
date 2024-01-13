<script>
import SingleFilm from './SingleFilm.vue'

//importo lo store
// import {store} from '../store.js'

    export default {
        name: 'FilmList',
        components: {
            SingleFilm
        },

    //     data() {
    //         return {
    //             store,
    //     }
    // }
}
</script>

<template>
    <section class="container">

        <div class="row">
            <!-- prototipo da ripetere -->
            <!-- <div v-for="card in store.CharactersList" :key="card.id"  class="col"> -->
                <SingleFilm />
            <!-- </div> -->
        </div>

    </section>
</template>
    
<style lang="scss" scoped>

.container{
    background-color: dimgrey;
    width: 100vw;
    height: 100%;

    .row{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
   
}
}


</style>
