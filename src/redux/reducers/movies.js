import axios from 'axios';

// action type
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED';


const GET_ONE_MOVIE_SUCCESS = 'GET_ONE_MOVIE_SUCCESS';
const GET_ONE_MOVIE = 'GET_ONE_MOVIE';
const GET_ONE_MOVIE_FAILED = 'GET_ONE_MOVIE_FAILED';

const apiKey = 'cfe422613b250f702980a3bbf9e90716';

// action creator
const getMovieById = (movieId) => (dispatch) => {
  dispatch(getOne(movieId));
  return axios({
    method: 'get',
    url: `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${apiKey}`
  })
  .then(response => {
    console.log(response);
    dispatch(receiveOne(response.data));
  })
  .catch(error => {
    console.log(error);
    dispatch(getOneFailed(movieId, error));
  });
};

export { getMovieById };

const getOne = (movieId) => ({
  type: GET_ONE_MOVIE,
  movieId,
});

const receiveOne = (movie) => ({
  type: GET_ONE_MOVIE_SUCCESS,
  movie
});

const getOneFailed = (movieId, error) => ({
  type: GET_ONE_MOVIE_FAILED,
  movieId,
  error
});

const initialState = {
  movies: [],
  loading: false,
  error: null
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_MOVIE:
    return {
      ...state,
      loading: true
    };
    case GET_ONE_MOVIE_SUCCESS:
    return {
      ...state,
      movies: state.movies.concat([action.movie]),
      loading: false,
    };
    case GET_ONE_MOVIE_FAILED:
    return {
      ...state,
      error: action.error,
      loading: false,
    };
    default:
    return state;

  }
}

export default moviesReducer;
