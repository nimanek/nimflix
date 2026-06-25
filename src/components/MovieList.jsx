import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useMovieStore } from "../store/useMovieApi";

const MovieList = () => {
    const movies = useMovieStore((state)=> state.movies)
    const isLoading = useMovieStore((state)=> state.isLoading)
    const error = useMovieStore((state)=> state.error)

    const fetchLatestMovies = useMovieStore((state)=> state.fetchLatestMovies)

    useEffect(()=>{
        fetchLatestMovies();
        // console.log(movies)
    },[]);

    return (
        <>
            <main className="flex flex-wrap gap-6">
                {/* {isLoading && <p>LOADING.............</p>} */}
                {movies.map((movie)=>(
                    <ul className="mt-6 max-h-full w-54 h-100 rounded-md shadow-md cursor-pointer overflow-hidden" key={movie.imdbID}>
                        <li><MovieCard movie={movie} /></li>
                    </ul>
                ))}
            </main>
        </>
    );
};

export default MovieList;
