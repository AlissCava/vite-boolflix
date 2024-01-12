import { reactive } from 'vue'

export const store = reactive ({
    
    FilmList:[],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=51beb08128e6a4e1885917a6f6e848a1&query=ritorno+al+futuro"
    // apiParams: 
    // searchText: "",
    // loading: true,
});