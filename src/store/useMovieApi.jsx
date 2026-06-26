import { create } from "zustand";


export const useMovieStore = create((set)=>({
    movies: [],
    searchedMovies:[],
    currentMovie: [],
    isLoading: false,
    error: false,

    fetchLatestMovies: async ()=>{
        set({isLoading: true});
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=81078cc1&s=movie&y=${new Date().getFullYear()}`);
            const data = await response.json()

            if(data.Response === "True"){
                set({movies: data.Search, isLoading: false,error: false})
            }else{
                set({movies: [], error: true, isLoading: false})
            }
        }catch(err){
            set({error:'faild to connect to server...', isLoading: false})
        }
    },

    fetchMovieById: async(imdbID)=>{
        set({isLoading: true, error:false, currentMovie:[]});
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=81078cc1&i=${imdbID.imdbID}`);
            const data = await response.json()

            if(data.Response === "True"){
                set({currentMovie: data, isLoading: false,error: false})
            }else{
                set({ error: true, isLoading: false})
            }
        }catch(err){
            set({error:'faild to connect to server...', isLoading: false})
        }
    },

    fetchMovieBySearch: async(event)=>{
        if(!event || event.trim() === ''){
            const state = useMovieStore.getState();
            state.fetchLatestMovies();
            return;
        };
        set({isLoading: true, error: false, movies:[]});
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=81078cc1&s=${event}`);
            const data = await response.json()

            if(data.Response === "True"){
                set({movies: data.Search, isLoading: false, error: false})
            }else{
                set({ error: true, isLoading: false})
            }
        }catch(err){
            set({error:'faild to connect to server...', isLoading: false})
        }
    }
}))