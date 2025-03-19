import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  movies: {}
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addmovies: (state, { payload }) => {
      state.movies = payload;
    }
  }

})

export const getAllmovies = (state) => state.movies.movies;

export default movieSlice.reducer;
export const { addmovies } = movieSlice.actions;

