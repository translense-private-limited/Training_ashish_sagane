import React, { useCallback, useEffect, useMemo } from 'react';
import MovieListing from '../MovieListing/MovieListing'
import MovieApi from '../../commons/apis/MovieApi';
import { Apikey } from '../../commons/apis/MovieApikey'
import { useDispatch } from 'react-redux';
import { addmovies } from '../../features/movies/movieSlice';

const Home = () => {

  const dispatch = useDispatch();

  const fetchMovie = (async () => {
    const datatext = 'Harry'
    const response = await MovieApi.get(`?apiKey=${Apikey}&s=${datatext}&type=movie`)
      .catch(err => console.log(err))
    dispatch(addmovies(response.data))
  })
  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <div>
      Home
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;