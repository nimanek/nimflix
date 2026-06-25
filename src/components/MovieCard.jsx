import React from 'react'

const MovieCard = () => {
  return (
    <div>
      <div className="max-w-54 max-h-fit mt-6 rounded-md shadow-md cursor-pointer overflow-hidden">
                    <img
                        className="w-full"
                        src="https://placehold.co/200x250"
                        alt=""
                    />
                    <div className="p-3">
                        <h2 className="font-semibold text-xl">title</h2>
                        <p className="line-clamp-3 font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deserunt, ea. Ipsum nemo, neque quae aut
                            facere odit officia est provident sequi expedita
                            repudiandae explicabo odio maxime sed...
                        </p>
                    </div>
                </div>
    </div>
  )
}

export default MovieCard
