import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, } from 'semantic-ui-react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

export default class MovieList extends Component {

  render() {
    const { perPage, movies, pagination } = this.props;
    return (
      <Segment>
        <Grid container relaxed columns={4} >
        <Grid.Row only='computer'>
          {movies.map((movie, idx) =>
            (<Grid.Column key={idx}>
              <MovieCard movie={movie} movieId={movie.id} />
            </Grid.Column>)
          )}
          </Grid.Row>
        </Grid>
        <Grid container columns={1}>
        <Grid.Row only='mobile'>
          {movies.map((movie, idx) =>
            (<Grid.Column key={idx}>
              <MovieCard movie={movie} movieId={movie.id} />
            </Grid.Column>)
          )}
          </Grid.Row>
        </Grid>
        <Pagination pagination={pagination} handlePageNumbeClick={() => console.log('ahihi')}/>
      </Segment>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
}

const aMovie = {
  title: "Mad Max: Fury Road",
  releaseDate: "2015-05-13",
  posterPath: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
  overview: "Mad Max: Fury Road",
};

MovieList.defaultProps = {
  movies: [ aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie],
  perPage: 8
}
