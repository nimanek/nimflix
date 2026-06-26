import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useMovieStore } from "../store/useMovieApi";
import { Link, useParams } from "react-router-dom";

const MovieList = () => {
    const movies = useMovieStore((state)=> state.movies)
    const isLoading = useMovieStore((state)=> state.isLoading)
    const error = useMovieStore((state)=> state.error)

    const fetchLatestMovies = useMovieStore((state)=> state.fetchLatestMovies)

    useEffect(()=>{
        fetchLatestMovies();
    },[]);

    return (
        <>
            <main className="flex flex-wrap gap-6">
                {isLoading && <p>LOADING.............</p>}
                {movies.map((movie)=>(
                    <ul className="mt-6 max-h-full w-54 h-100 rounded-md shadow-md cursor-pointer overflow-hidden" key={movie.imdbID}>
                        <Link to={`/movie/${movie.imdbID}`}><MovieCard movie={movie} /></Link>
                    </ul>
                ))}
            </main>
        </>
    );
};

export default MovieList;
