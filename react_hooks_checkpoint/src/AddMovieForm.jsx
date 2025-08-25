import React from 'react'
import { useState } from 'react'
function AddMovieForm({ onAdd }) {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [description, setDescription] = useState('')
    const [poster, setPoster] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')

    function submit(e){
        e.preventDefault()
        if(!title.trim()) return;
        
        // If onAdd prop exists, call it, otherwise just log the data
        if (onAdd) {
            onAdd({title, year, description, poster, price, rating})
        } else {
            console.log('New movie:', {title, year, description, poster, price, rating})
        }
        
        // Clear the form
        setTitle('')
        setYear('')
        setDescription('')
        setPoster('')
        setPrice('')
        setRating('')
    }

  return (
    <div className="py-8 px-6 bg-gray-100 rounded-lg shadow-md max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Movie</h2>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="text" 
            placeholder="Year" 
            value={year} 
            onChange={e => setYear(e.target.value)} 
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
        ></textarea>
        <input 
          type="text" 
          placeholder="Poster URL" 
          value={poster} 
          onChange={e => setPoster(e.target.value)} 
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Price" 
            value={price} 
            onChange={e => setPrice(e.target.value)} 
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="text" 
            placeholder="Rating (1-10)" 
            value={rating} 
            onChange={e => setRating(e.target.value)} 
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 ease-in-out"
        >
          Add Movie
        </button>
      </form>
    </div>
  )
}

export default AddMovieForm
