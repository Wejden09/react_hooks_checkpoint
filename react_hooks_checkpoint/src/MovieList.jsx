import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

function MovieList({movies}) {
    if(movies.length === 0){
        return <div className="text-center p-8 text-gray-500 text-lg">
            <p>No movies found</p>
        </div>
    }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
        {movies.map(m =>(
            <Link key={m.id} to={`/movie/${m.id}`}>
                <MovieCard movie={m}/>
            </Link>
        ))}
    </div>
  )
}

export default MovieList