import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DimmerLoader, MovieDetail } from '../../components/';
import { getMovieByIdIfNeeded } from  '../../redux/reducers/movies';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class MovieDetailView extends Component {
  componentDidMount() {
    // redux help us with the injection here
    const { dispatch, movieId } = this.props;
    dispatch(getMovieByIdIfNeeded(movieId));
  }
  render() {
    const { loading, movie } = this.props;
    console.log("MOVIE", movie)
    return (
      <Segment>
        {
          loading ? (<DimmerLoader/>) : (movie && <MovieDetail movie={movie}/>)
        }
      </Segment>


    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.moviesReducer.detailedMovies[ownProps.movieId],
    loading: state.moviesReducer.loading,
  }
}

MovieDetailView.defaultProps = {
  movieId: "76341",
}

MovieDetailView.propTypes = {
  movie: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  movieId: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(MovieDetailView);
