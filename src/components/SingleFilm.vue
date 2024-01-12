<script>
    export default {
        name: 'SingleFilm'
    }
</script>

<template>
        <div class="card film-card">
            <div class="imageContainer">
                <img src="../immagineProva/IMG_3129.JPG" alt="...">
                <!-- e solo unha immagine di prova per vedere quanto occupa di spazio -->

                <div class="card-overlay">
                    <h5 class="film-title">Card title</h5>
                    <p class="film-orinal-title">original title</p>
                    <p class="film-vote">voto 8.2</p>
                    <p class="film-overview">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quisquam facilis obcaecati perferendis autem error tempore quas praesentium minus asperiores vitae. Voluptatum velit nam voluptatibus minus animi vero, voluptates commodi!</p>
                </div>     
            </div>
            
        </div>
</template>

<style lang="scss" scoped>
    .film-card{
        width: 200px;
        height: 300px;
        background-color: blue;
        overflow: hidden;


        &:hover .card-overlay {
            opacity: 1;
        }
    }

        .imageContainer{
            // background-color: orange;
            width: 200px;
            height: 300px;
            position: relative;
            overflow: hidden;


            img{
                // background-color: aqua;
                width: 200px;
                height: 300px;

            }
        }

        .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8); /* Sfondo semitrasparente bianco */
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }

</style>