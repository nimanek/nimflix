import React from "react";

const MovieDetail = () => {
    return (
        <>
            <main>
                <div className="flex gap-26 mt-6">
                    <img className="shadow-md" src="https://placehold.co/300x400" />
                    <div className="flex flex-col gap-8">
                        <h1 className="text-2xl font-medium">title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam molestias animi fugiat rem autem, ex quos reprehenderit consequuntur cumque, quasi, veritatis vel aperiam necessitatibus temporibus eaque placeat iure repellat dignissimos</p>
                        <span>*****</span>
                        <p>other details if needed</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MovieDetail;
