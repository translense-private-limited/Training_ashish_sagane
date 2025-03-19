import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from '../../commons/apis/MovieApi';
import { Apikey } from '../../commons/apis/MovieApikey';



export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async ()=>{
 const datatext = 'Harry'
    const response = await MovieApi.get(`?apiKey=${Apikey}&s=${datatext}&type=movie`)
      .catch(err => console.log(err))
 return (response.data);
})


export const fetchAsyncShows=createAsyncThunk('movies/fetchAyncShows',async ()=>{
  const datatext = 'Friends'
     const response = await MovieApi.get(`?apiKey=${Apikey}&s=${datatext}&type=series`)
       .catch(err => console.log(err))
  return (response.data);
 })


export const fetchAsync_MoviesOrShows_Details=createAsyncThunk('movies/fetchAsync_MoviesOrShows_Details',async (id)=>{
     const response = await MovieApi.get(`?apiKey=${Apikey}&i=${id}&Plot=full`)
       .catch(err => console.log(err))
  return (response.data);
 })

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addmovies: (state, { payload }) => {
      state.movies = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log('pending');
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
        return { ...state, movies: payload };
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
        return { ...state, shows: payload };
      })
      .addCase(fetchAsync_MoviesOrShows_Details.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
          return { ...state, selectedMovieOrShow: payload };
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log('rejected');
      });
  }
});

export const getAllmovies = (state) => state.movies.movies;
export const getAllshows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
export const { addmovies } = movieSlice.actions;

