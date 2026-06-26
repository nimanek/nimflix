import { Link, NavLink } from "react-router-dom";
import { useMovieStore } from "../store/useMovieApi";
import { useEffect, useRef } from "react";

export const Navbar = () => {
    const fetchMovieBySearch = useMovieStore(
        (state) => state.fetchMovieBySearch,
    );

    // here we make a bit delay that we get server response first and not an error(without useing this, if we would type fast, movies would show but error too)
    const timeoutRef = useRef(null);
    const handleInputChange = (e) => {
        const value = e.target.value;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            fetchMovieBySearch(value);
        }, 100);
    };

    return (
        <>
            <div className="bg-[#d0a842] w-full font-light h-22">
                <ul className="flex justify-around items-center">
                    <Link to={'/'}>
                        <img
                            src="/src/assets/high-resolution-color-logo.png"
                            alt="Home"
                            className="w-26 h-26"
                        />
                    </Link>
                    <div>
                        <input
                            type="text"
                            className="bodrer border p-2 outline-none rounded"
                            placeholder="search..."
                            // onChange={(e)=>fetchMovieBySearch(e.target.value)}
                            onChange={handleInputChange}
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
