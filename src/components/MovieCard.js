import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'

const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

export default class MovieCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src={getImage(this.props.movie.posterPath)} />
        <Card.Content>
          <Card.Header>{this.props.movie.title}</Card.Header>
          <Card.Meta>Released at {this.props.movie.releaseDate}</Card.Meta>
          <Card.Description>Genres: {this.props.movie.genres.map(genre => genre.name).join(', ')}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: "Mad Max: Fury Road",
    releaseDate: "2015-05-13",
    posterPath: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    genres: [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":878,"name":"Science Fiction"},{"id":53,"name":"Thriller"}],
  }
};
