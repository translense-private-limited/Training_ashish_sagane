import React from 'react';
import { useSelector } from 'react-redux';
import { getAllmovies,getAllshows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './Movielisting.scss';

const MovieListing = () => {

  const movies = useSelector(getAllmovies)
  const shows = useSelector(getAllshows)
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

let resposeShows = shows.Response === 'True' ?
(
  shows.Search.map((show, index) => {
    return <MovieCard data={show} key={index} />
  })
) :

(<div className='shows-error'>
  <h2>{shows.Error}</h2>
</div>);

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className="movie-container">{resposeMovies}</div>
      </div>
      <div className='shows-list'>
        <h2 >Shows</h2>
        <div className="movie-container">{resposeShows}</div>
      </div>

    </div>
  );
};

export default MovieListing;