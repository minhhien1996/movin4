import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    return (
      <Grid relaxed columns={3}>
        {this.props.movies.map((movie, idx) =>
          (<Grid.Column key={idx}>
            <MovieCard movie={movie} />
          </Grid.Column>)
        )}
      </Grid>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}

const aMovie = {
  title: "Mad Max: Fury Road",
  releaseDate: "2015-05-13",
  posterPath: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
  genres: [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":878,"name":"Science Fiction"},{"id":53,"name":"Thriller"}],
};

MovieList.defaultProps = {
  movies: [ aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie, aMovie]
}
