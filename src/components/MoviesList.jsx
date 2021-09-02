import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {

    return (
        <div>
            <div className="Movielist">
        {movies.map((el , i) => (
          <MovieCard key={i} movies={el} />
        ))}
      </div>
        </div>
    )
}

export default MoviesList
