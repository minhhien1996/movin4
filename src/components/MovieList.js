import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Table, Menu, Icon, Segment, } from 'semantic-ui-react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

export default class MovieList extends Component {
  state = { currentPage: 1, totalPage: 1 };

  handlePageNumbeClick = function (e, { number }) {
    console.log(this);
    this.setState({ currentPage: number })
  }

  render() {
    const { currentPage, totalPage } = this.state;
    const { perPage, movies } = this.props;
    const begin = (currentPage - 1) * perPage;
    const end = Math.min(begin + perPage, movies.length);
    return (
      <Segment>
        <Grid container relaxed columns={4}>
          {movies.slice(begin, end).map((movie, idx) =>
            (<Grid.Column key={idx}>
              <MovieCard movie={movie} />
            </Grid.Column>)
          )}
        </Grid>
        <Pagination handlePageNumbeClick={this.handlePageNumbeClick.bind(this)}/>
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
