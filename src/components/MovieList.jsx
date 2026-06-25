import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
    return (
        <>
            <main className="flex flex-wrap gap-6">
                <MovieCard />
            </main>
        </>
    );
};

export default MovieList;
