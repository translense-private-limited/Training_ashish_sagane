import React, { useCallback, useEffect, useMemo } from 'react';
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {

  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch])

  return (
    <div>
      Home
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;