import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react'

const getImage = (path) => path ? `https://image.tmdb.org/t/p/w500/${path}` : '/default_poster.png';

export default class MovieCard extends React.Component {
  render() {
    const { posterPath, title, releaseDate, overview } = this.props.movie;
    return (
      <Card>
        <Image src={getImage(posterPath)} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>Released at {releaseDate}</Card.Meta>
          <Card.Description>{overview.substring(0, 50)}...</Card.Description>
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
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: "Mad Max: Fury Road",
    releaseDate: "2015-05-13",
    posterPath: "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
    overview: "Mad Max: Fury Road",
    genres: [],
  }
};
