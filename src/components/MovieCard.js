import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const imageUrl = `https://image.tmdb.org/t/p/w500/jZowUf4okNYuSlgj5iURE7CDMho.jpg`;

const MovieCard = () => (
  <Card>
    <Image src={imageUrl} />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default MovieCard
