import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieStore } from "../store/useMovieApi";

const MovieDetail = () => {
    const param = useParams()

    const currentMovie = useMovieStore((state)=> state.currentMovie)
    const fetchMovieById = useMovieStore((state)=> state.fetchMovieById)

    useEffect(()=>{
        fetchMovieById(param)
    },[])
    console.log(currentMovie)

    return (
        <>
            <main>
                <div className="flex gap-26 mt-6">
                    {/* Left Content */}
                    <div className="relative w-fit bg-red-300 rounded">
                        <span className="absolute top-2 right-1 rounded-full bg-black/80 px-2 py-1 text-white">{currentMovie.Runtime}</span>
                        <img className="shadow-xl h-120 w-120 rounded" src={currentMovie.Poster !== "N/A" ? currentMovie.Poster : 'https://placehold.co/120x120?text=No+Poster'} />
                    </div>

                     {/*Right Content */}
                    <div className="flex flex-col gap-8">
                        <h1 className="text-2xl font-medium">{currentMovie.Title}</h1>
                        <p>{currentMovie.Plot}</p>
                        <span>Rate: {currentMovie.imdbRating}</span>
                        <div>
                            <p className="font-semibold">Released: <span className="font-normal">{currentMovie.Released}</span></p>
                            <p className="font-semibold">Country: <span className="font-normal">{currentMovie.Country}</span></p>
                            <p className="font-semibold">Language: <span className="font-normal">{currentMovie.Language}</span></p>
                            <p className="font-semibold">Genre: <span className="font-normal">{currentMovie.Genre}</span></p>
                            <p className="font-semibold mt-4">Actors: <span className="font-normal">{currentMovie.Actors}</span></p>
                            <p className="font-semibold mt-4">Type: <span className="font-normal">{currentMovie.Type}</span></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MovieDetail;
