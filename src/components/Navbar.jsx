export const Navbar = () => {
    return (
        <>
            <div className="bg-red-400 py-4 w-full">
                <ul className="flex justify-around">
                    <div>
                        <input
                            type="text"
                            className="bodrer border-2 p-1"
                            placeholder="search..."
                        />
                    </div>
                    <div className="flex gap-8">
                        <li>Home</li>
                        <li>Latest</li>
                        <li>Popular</li>
                    </div>
                </ul>
            </div>
        </>
    );
};
