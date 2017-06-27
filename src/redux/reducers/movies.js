import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

// action type
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED';


const GET_ONE_MOVIE_SUCCESS = 'GET_ONE_MOVIE_SUCCESS';
const GET_ONE_MOVIE = 'GET_ONE_MOVIE';
const GET_ONE_MOVIE_FAILED = 'GET_ONE_MOVIE_FAILED';

const apiKey = 'cfe422613b250f702980a3bbf9e90716';
const baseUrl = 'https://api.themoviedb.org/3';

// async action creator
const getMovieById = (movieId) => (dispatch) => {
  dispatch(getOne(movieId));
  return axios({
    method: 'get',
    url: `${baseUrl}/movie/${movieId}?api_key=${apiKey}`
  })
  .then(response => {
    console.log(response);
    dispatch(receiveOne(camelcaseKeys(response.data)));
  })
  .catch(error => {
    console.log(error);
    dispatch(getOneFailed(movieId, error));
  });
};

const getLastest = (page = 1) => (dispatch) => {
  dispatch(getList());
  return axios({
    method: 'get',
    url: `${baseUrl}/discover/movie?api_key=${apiKey}&page=${page}&sort_by=release_date.desc`
  })
  .then(response => {
    console.log(response);
    dispatch(receiveList(camelcaseKeys({
      ...response.data,
      results: response.data.results.map(element => camelcaseKeys(element))
    })));
  })
  .catch(error => {
    console.log(error);
    dispatch(getListFailed(error));
  });
}

// action creator

const getOne = (movieId) => ({
  type: GET_ONE_MOVIE,
  movieId,
});

const getList = () => ({
  type: GET_MOVIES,
});

const receiveOne = (movieId, movie) => ({
  type: GET_ONE_MOVIE_SUCCESS,
  movieId,
  movie
});

const receiveList = (list) => ({
  type: GET_MOVIES_SUCCESS,
  list
});

const getOneFailed = (movieId, error) => ({
  type: GET_ONE_MOVIE_FAILED,
  movieId,
  error
});

const getListFailed = (error) => ({
  type: GET_MOVIES_FAILED,
  error
});

const initialState = {
  list: {},
  detailedMovies: {},
  loading: false,
  error: null
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_MOVIE, GET_MOVIES:
    return {
      ...state,
      loading: true
    };
    case GET_ONE_MOVIE_SUCCESS:
    return {
      ...state,
      detailedMovies: {
        ...state.detailedMovies,
        [action.movieId]: action.movie,
      },
      loading: false,
    };
    case GET_ONE_MOVIE_FAILED, GET_MOVIES_FAILED:
    return {
      ...state,
      error: action.error,
      loading: false,
    };
    case GET_MOVIES_SUCCESS:
    return {
      ...state,
      loading: false,
      list: action.list,
    }
    default:
    return state;

  }
}

export { getMovieById, getLastest };
export default moviesReducer;
