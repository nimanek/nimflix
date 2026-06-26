import { create } from "zustand";


export const useMovieStore = create((set)=>({
    movies: [],
    currentMovie: [],
    isLoading: false,
    error: '',

    fetchLatestMovies: async ()=>{
        set({isLoading: true});
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=81078cc1&s=movie&y=2026`);
            const data = await response.json()

            if(data.Response === "True"){
                set({movies: data.Search, isLoading: false})
            }else{
                set({movies: [], error: 'No Movie Found', isLoading: false})
            }
        }catch(err){
            set({error:'faild to connect to server...', isLoading: false})
        }
    },

    fetchMovieById: async(imdbID)=>{
        set({isLoading: true, error:'', currentMovie:[]});
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=81078cc1&i=${imdbID.imdbID}`);
            const data = await response.json()
            console.log(data)

            if(data.Response === "True"){
                set({currentMovie: data, isLoading: false})
            }else{
                set({ error: 'No Movie Found', isLoading: false})
            }
        }catch(err){
            set({error:'faild to connect to server...', isLoading: false})
        }
    }
}))