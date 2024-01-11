<script>
    export default {
        name: "AppHeader",
    }
</script>

<template>
    <header>
        <div id="container">
            <h1>boolflix</h1>
            <div>
                <!-- bootstrap -->
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </header>
</template>
  
<style lang="scss" scoped>

    header{
       
        background-color: black;
        margin-top: -23px;
        margin-left: -10px;
        margin-right: -10px;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;

        #container{
            background-color: black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h1{
                color: red;
            }
        }
    }

</style>
  