import { Link, NavLink } from "react-router-dom";
import { useMovieStore } from "../store/useMovieApi";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
    const fetchLatestMovies = useMovieStore((state)=> state.fetchLatestMovies)
    const searchedMovies = useMovieStore((state)=>state.searchedMovies)
    const fetchMovieBySearch = useMovieStore((state) => state.fetchMovieBySearch);
    const [localInput, setLocalInput] = useState(()=>{
        return localStorage.getItem('inputSearch') || '';
    })

    const isTyping = useRef(false)


    useEffect(()=>{
        setLocalInput(searchedMovies)
    },[searchedMovies]);

    // debouncing 
    useEffect(()=>{
        if(!isTyping.current){
            return
        }


        const delayDebounceFn = setTimeout(() => {
            fetchMovieBySearch(localInput)
            localStorage.setItem('inputSearch',localInput)
        }, 500);
        return()=> clearTimeout(delayDebounceFn)
    },[localInput, fetchMovieBySearch])

    // useEffect(()=>{
    //     localStorage.setItem('inputSearch',localInput)
    // },[localInput])

    return (
        <>
            <div className="bg-[#d0a842] w-full font-light h-22">
                <ul className="flex justify-around items-center">
                    <Link  to={'/'}>
                        <img
                            src="/src/assets/high-resolution-color-logo.png"
                            alt="Home"
                            className="w-26 h-26"
                        />
                    </Link>
                    <div>
                        {/* search input */}
                        <input
                            type="text"
                            className="bodrer border p-2 outline-none rounded"
                            placeholder="search..."
                            value={localInput}
                            onChange={(e)=>{isTyping.current = true;
                                            setLocalInput(e.target.value);}}
                        />
                    </div>
                    <div className="flex gap-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-[#5b22bd]" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/latest"
                            className={({ isActive }) =>
                                isActive ? "text-[#5b22bd]" : ""
                            }
                        >
                            Latest
                        </NavLink>
                        <NavLink
                            to="/popular"
                            className={({ isActive }) =>
                                isActive ? "text-[#5b22bd]" : ""
                            }
                        >
                            Popular
                        </NavLink>
                    </div>
                </ul>
            </div>
        </>
    );
};
