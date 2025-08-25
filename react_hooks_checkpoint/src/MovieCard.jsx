import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="w-full max-w-sm mx-auto transition-transform transform hover:scale-105">
      <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-4 flex flex-col h-full hover:shadow-2xl transition-shadow duration-200">
        <div className="h-56 w-full mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={movie.poster}
            alt={movie.title}
          />
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-gray-800 truncate">{movie.title}</h2>
            <span className="bg-yellow-400 text-gray-900 font-bold rounded-lg px-3 py-1 text-sm shadow">{movie.rating}</span>
          </div>
          <div className="text-sm text-gray-500 mb-2">{movie.year}</div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{movie.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-bold text-blue-600">${movie.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;