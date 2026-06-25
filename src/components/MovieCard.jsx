import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <Link to={'/movie'}>
      <div className="">
                    <img
                        className="w-full h-70 object-cover hover:object-bottom-right transition-all"
                        src={movie.Poster !== "N/A" ? movie.Poster : 'https://placehold.co/200x250?text=No+Poster'}
                        alt={movie.Title}
                    />
                    <div className="p-3">
                        <h2 className="font-semibold text-md line-clamp-2">{movie.Title}</h2>
                        {/* <p className="line-clamp-3 font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deserunt, ea. Ipsum nemo, neque quae aut
                            facere odit officia est provident sequi expedita
                            repudiandae explicabo odio maxime sed...
                        </p> */}
                    </div>
                </div>
    </Link>
  )
}

export default MovieCard
