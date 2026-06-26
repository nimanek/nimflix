import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div className="bg-[#FF6F61] py-4 w-full">
                <ul className="flex justify-around">
                    <div>
                        <input
                            type="text"
                            className="bodrer border-2 p-1"
                            placeholder="search..."
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
