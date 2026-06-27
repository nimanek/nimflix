import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useMovieStore } from "../store/useMovieApi";
import { Link, useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import Filter from "./Filter";

const MovieList = () => {
    const movies = useMovieStore((state) => state.movies);
    const isLoading = useMovieStore((state) => state.isLoading);
    const error = useMovieStore((state) => state.error);

    const fetchMovieBySearch = useMovieStore((state)=> state.fetchMovieBySearch);
    const fetchLatestMovies = useMovieStore((state) => state.fetchLatestMovies);
    const fetchMovieByYear = useMovieStore((state)=> state.fetchMovieByYear)

    useEffect(() => {
        const savedSearch = localStorage.getItem('inputSearch');
        const savedYear = localStorage.getItem('selectedYear');


        if(savedSearch && savedSearch.trim() !== ''){
            fetchMovieBySearch(savedSearch)
        }else if(savedYear && savedYear.trim() !== ''){
            fetchMovieByYear(savedYear)
        } 
        else{
            fetchLatestMovies();
        }
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="fixed inset-0 flex flex-col justify-center items-center z-50">
                    <GridLoader color="#673AB7" margin={4} />
                </div>
            ) : (
                <>
                <div>
                    <Filter />
                </div>
                <main className="flex flex-wrap gap-6">
                    {movies.map((movie) => (
                        <ul
                            className="mt-6 max-h-full w-54 h-100 rounded-md shadow-md cursor-pointer overflow-hidden bg-white"
                            key={movie.imdbID}
                        >
                            <Link to={`/${movie.imdbID}`}>
                                <MovieCard movie={movie} />
                            </Link>
                        </ul>
                    ))}
                </main>
            </>
            )}
            {/* {error && <div className="fixed inset-0 flex flex-col justify-center items-center z-50">No Movies Found😭</div>} */}
        </>
    );
};

export default MovieList;
