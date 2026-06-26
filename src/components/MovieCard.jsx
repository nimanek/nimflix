import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <>
      <div>
                    <img
                        className="w-full h-70 object-cover hover:object-bottom transition-all"
                        src={movie.Poster !== "N/A" ? movie.Poster : 'https://placehold.co/200x250?text=No+Poster'}
                        alt={movie.Title}
                    />
                    <div className="p-3 h-24 flex flex-col justify-between">
                        <h2 className="font-semibold text-md line-clamp-2">{movie.Title}</h2>
                        <p className='text-xs'>{movie.Year}</p>
                    </div>
                </div>
    </>
  )
}

export default MovieCard
