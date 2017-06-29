import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rating, Segment } from 'semantic-ui-react'

export default class MovieRating extends Component {
  render() {
    const { rating } = this.props;
    const { voteAverage, voteScale, voteCount, } = rating;
    const maxRating = 5;
    const scaledRating = voteAverage / voteScale * maxRating;
    return (
      <Segment textAlign="center" vertical inverted>
        <div>
          <b style={{fontSize: '22px'}}><span>{voteAverage}</span></b><span>/</span><span><small style={{fontSize: '16px'}}>{voteScale}</small></span>
        </div>
        <div>
          <p style={{fontSize: '16px'}}>{voteCount} votes</p>
        </div>
        <Rating maxRating={5} rating={scaledRating} icon='star' size='small' disabled/>
      </Segment>
    );
  }
}

MovieRating.propTypes = {
  rating: PropTypes.shape({
    voteAverage: PropTypes.number.isRequired,
    voteScale: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
  })
}

MovieRating.defaultProps = {
  rating: {
    voteScale: 10
  }
}
