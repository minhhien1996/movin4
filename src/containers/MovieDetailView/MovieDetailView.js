import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DimmerLoader, MovieDetail } from '../../components/';
import { getMovieByIdIfNeeded } from  '../../redux/reducers/movies';
import PropTypes from 'prop-types';

class MovieDetailView extends Component {
  componentDidMount() {
    // redux help us with the dispatch injection here
    // react-router help us with the params injection
    const { dispatch, movieId } = this.props;
    dispatch(getMovieByIdIfNeeded(movieId));
  }
  render() {
    const { loading, movie } = this.props;
    return (
      <div>
        {
          (loading || !(movie)) ? (<DimmerLoader/>) : (<MovieDetail movie={movie}/>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const movieId = ownProps.match.params.movieId;
  return {
    movieId: ownProps.match.params.movieId,
    movie: state.moviesReducer.detailedMovies[movieId],
    loading: state.moviesReducer.loading,
  }
}

MovieDetailView.defaultProps = {
  loading: true
}

MovieDetailView.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(MovieDetailView);
