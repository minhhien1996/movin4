import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Segment, Grid, Divider, Image, Item } from 'semantic-ui-react';
import formatMoney from 'accounting-js/lib/formatMoney.js'
import MovieRating from './MovieRating';

const getImage = (path) => path ? `https://image.tmdb.org/t/p/w500/${path}` : '/default_poster.png';

export default class MovieDetail extends Component {
  render() {
    const { movie } = this.props;
    const { title, overview, voteAverage, voteCount, backdropPath, posterPath, genres, originalLanguage, runtime, releaseDate, originalTitle, revenue, productionCompanies, budget } = movie;
    const rating = {
      voteAverage,
      voteScale: 10,
      voteCount,
    }
    const contents = [{
      header: 'Original title',
      data: originalTitle,
    }, {
      header: 'Revenue',
      data: `${formatMoney(revenue)}`
    }, {
      header: 'Budget',
      data: `${formatMoney(budget)}`
    }, {
      header: "Production Companies",
      data: `${productionCompanies.map(company => company.name).join(', ')}`
    }, {
      header: 'Overview',
      data: overview
    }];
    return (
      <Container>
        <Segment inverted>
          <Grid divided>
            <Grid.Column key="title"  width={10}>

              <Header size='huge' inverted>{title}</Header>
              <div>
                <p><strong>{originalLanguage.toUpperCase()}</strong> | {runtime} min | {genres.map(genre => genre.name).join(" , ")}</p>
                <p>Release Date: {releaseDate}</p>
              </div>


            </Grid.Column>
            <Grid.Column key="rating" width={6}>
              <MovieRating rating={rating} />
            </Grid.Column>
          </Grid>
        </Segment>
        <Divider />
        <Grid divided>
          <Grid.Column key="poster"  width={6} verticalAlign="middle">
            <Image centered src={getImage(posterPath)} />
          </Grid.Column>
          <Grid.Column key="back_drop" width={10} verticalAlign="middle">
            <Image centered src={getImage(backdropPath)} />
          </Grid.Column>
        </Grid>
        <Divider />

        <Item.Group>
          {contents.map(item => (<Item>
            <Item.Content>
              <Item.Header as='h3'>{item.header}</Item.Header>
              <Item.Description style={{ fontSize: '18px'}}>
                {item.data !== 'undefined' ? item.data : 'unknown'}
              </Item.Description>
            </Item.Content>
          </Item>))}
        </Item.Group>
      </Container>
    );
  }
}
