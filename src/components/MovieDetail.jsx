import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieStore } from "../store/useMovieApi";

const MovieDetail = () => {
    const param = useParams()

    const movies = useMovieStore((state)=> state.movies)
    const fetchMovieById = useMovieStore((state)=> state.fetchMovieById)

    useEffect(()=>{
        fetchMovieById(param)
    },[])
    console.log(movies)

    return (
        <>
            <main>
                <div className="flex gap-26 mt-6">

                    <span>hihi</span>
                    <img className="shadow-md h-100" src={movies.Poster} />

                    <div className="flex flex-col gap-8">
                        <h1 className="text-2xl font-medium">{movies.Title}</h1>
                        <p>{movies.Plot}</p>
                        <span>{movies.Ratings[0].Value}</span>
                        <div>
                            <p className="font-semibold">Released: <span className="font-normal">{movies.Released}</span></p>
                            <p className="font-semibold">Country: <span className="font-normal">{movies.Country}</span></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MovieDetail;
