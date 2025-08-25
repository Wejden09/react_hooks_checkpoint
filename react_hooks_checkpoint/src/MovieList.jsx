import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ movies }) {
    if (movies.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh] bg-gray-50 rounded-xl shadow-md p-8 m-8">
                <p className="text-gray-500 text-xl font-semibold">No movies found</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gray-50 rounded-xl shadow-md mx-4 my-8">
            {movies.map((m) => (
                <MovieCard key={m.id} movie={m} />
            ))}
        </div>
    );
}

export default MovieList