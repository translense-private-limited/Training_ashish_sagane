import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsync_MoviesOrShows_Details } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import { getSelectedMovieOrShow } from '../../features/movies/movieSlice';

import './Moviedetails.scss';

const MovieDetails = () => {

  const {imdbID} = useParams();
  console.log(imdbID);
  const dispatch = useDispatch();
  const selectedMovieOrshow = useSelector(getSelectedMovieOrShow);
  console.log(selectedMovieOrshow);

  useEffect(() => {
    dispatch(fetchAsync_MoviesOrShows_Details(imdbID));


  }, [ imdbID]);

  return (
    
    <>
   
    {selectedMovieOrshow ? (
        <div className='moviesection'>
      <div className='section-left'>
        
          <h2 className='movie-title'>{selectedMovieOrshow.Title}</h2>
          <p >{selectedMovieOrshow.Plot}</p>
          <p><strong>Director:</strong> {selectedMovieOrshow.Director}</p>
          <p><strong>Actors:</strong> {selectedMovieOrshow.Actors}</p>
          <p><strong>Genre:</strong> {selectedMovieOrshow.Genre}</p>
          <p><strong>Released:</strong> {selectedMovieOrshow.Released}</p>
          <p><strong>IMDB Rating:</strong> {selectedMovieOrshow.imdbRating}</p>
          <p><strong>IMDB Votes:</strong> {selectedMovieOrshow.imdbVotes}</p>
          <p><strong> Runtime:</strong> {selectedMovieOrshow.Runtime}</p>
          <p><strong> Year:</strong> {selectedMovieOrshow.Year}</p>
       
            </div>
            <div className='section-right'>
              <img src={selectedMovieOrshow.Poster} alt={selectedMovieOrshow.Title} />  
              </div>
            </div>
      ) 
      : (
        <p>Loading...</p>
      )}
</>
  );
};

export default MovieDetails;