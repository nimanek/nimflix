import { Link, NavLink } from "react-router-dom";
import { useMovieStore } from "../store/useMovieApi";
import { useEffect, useRef } from "react";

export const Navbar = () => {

    const fetchMovieBySearch = useMovieStore((state)=> state.fetchMovieBySearch)

    // here we make a bit delay that we get server response first and not an error(without useing this, if we would type fast, movies would show but error too)
    const timeoutRef = useRef(null);
    const handleInputChange =(e)=>{
        const value = e.target.value;

        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(()=>{
            fetchMovieBySearch(value)
        },100)
    }

    return (
        <>
            <div className="bg-[#DAA520] py-4 w-full">
                <ul className="flex justify-around items-center">
                    <div>
                        <input
                            type="text"
                            className="bodrer border-2 p-2 outline-none rounded"
                            placeholder="search..."
                            // onChange={(e)=>fetchMovieBySearch(e.target.value)}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex gap-8">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/latest">Latest</NavLink>
                        <NavLink to="/popular">Popular</NavLink>
                    </div>
                </ul>
            </div>
        </>
    );
};
