import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useMovieStore } from "../store/useMovieApi";
import { Link, useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";

const MovieList = () => {
    const movies = useMovieStore((state) => state.movies);
    const isLoading = useMovieStore((state) => state.isLoading);
    const error = useMovieStore((state) => state.error);

    const fetchLatestMovies = useMovieStore((state) => state.fetchLatestMovies);

    useEffect(() => {
        fetchLatestMovies();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="fixed inset-0 flex flex-col justify-center items-center z-50">
                    <GridLoader color="#673AB7" margin={4} />
                </div>
            ) : (
                <main className="flex flex-wrap gap-6">
                    {movies.map((movie) => (
                        <ul
                            className="mt-6 max-h-full w-54 h-100 rounded-md shadow-md cursor-pointer overflow-hidden"
                            key={movie.imdbID}
                        >
                            <Link to={`/movie/${movie.imdbID}`}>
                                <MovieCard movie={movie} />
                            </Link>
                        </ul>
                    ))}
                </main>
            )}
            {error && <div className="fixed inset-0 flex flex-col justify-center items-center z-50">No Movies Found😭</div>}
        </>
    );
};

export default MovieList;
