import React from "react";

const MovieList = () => {
    return (
        <>
            <main>
                <div className="border max-w-54 max-h-fit mt-6">
                    <img
                        className="w-full"
                        src="https://placehold.co/200x300"
                        alt=""
                    />
                    <div className="p-3">
                        <h2 className="font-bold">title</h2>
                        <p className="line-clamp-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deserunt, ea. Ipsum nemo, neque quae aut
                            facere odit officia est provident sequi expedita
                            repudiandae explicabo odio maxime sed...
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MovieList;
