import React from 'react';
import { useSelector } from 'react-redux';
import { getAllmovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {

  const movies = useSelector(getAllmovies)
  console.log(movies)
  let resposeMovies = movies.Response === 'True' ?
    (
      movies.Search.map((movie, index) => {
        return <MovieCard data={movie} key={index} />
      })
    ) :

    (<div className='movie-error'>
      <h2>{movies.Error}</h2>
    </div>);
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className="movie-container">{resposeMovies}</div>
      </div>

    </div>
  );
};

export default MovieListing;