import { Link } from "react-router-dom";
import { useMovieStore } from "../store/useMovieApi";
import { useEffect, useRef } from "react";

export const Navbar = () => {

    const fetchMovieBySearch = useMovieStore((state)=> state.fetchMovieBySearch)



    return (
        <>
            <div className="bg-[#DAA520] py-4 w-full">
                <ul className="flex justify-around items-center">
                    <div>
                        <input
                            type="text"
                            className="bodrer border-2 p-2 outline-none rounded"
                            placeholder="search..."
                            onChange={(e)=>fetchMovieBySearch(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-8">
                        <Link to="/">Home</Link>
                        <Link to="/latest">Latest</Link>
                        <Link to="/popular">Popular</Link>
                    </div>
                </ul>
            </div>
        </>
    );
};
