import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rating, Segment, Label } from 'semantic-ui-react'

export default class MovieRating extends Component {
  render() {
    const { rating } = this.props;
    const { voteAverage, voteScale, voteCount, } = rating;
    const maxRating = 5;
    const scaledRating = voteAverage / voteScale * maxRating;
    return (
      <Segment textAlign="center" vertical inverted>
        <div>
          <strong><span>{voteAverage}</span></strong><span>/</span><span><small>{voteScale}</small></span>
        </div>
        <div>
          <small>{voteCount}</small>
        </div>
        <Rating maxRating={5} rating={scaledRating} icon='star' size='small' disabled inverted/>
      </Segment>
    );
  }
}

MovieRating.defaultProps = {
  rating: {
    voteScale: 10
  }
}
