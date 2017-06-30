import React, { Component } from 'react'
import { Menu, Input, Dropdown, Icon, Button } from 'semantic-ui-react';

// genres will stay unchanged, so hardcode it here instead of fetching the same data all the times
const genres = [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ];

export default class NavigationBar extends Component {
  state = { activeItem: '', query:'' };

  handleItemClick = (name) => () => this.setState({ activeItem: name });

  handleOnSearchInputChange = (event, { value }) => this.setState({ query: value });

  isActiveItem = (item) => this.state.activeItem === item;

  render() {
    // const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item name='lastest' key='lastest' active={this.isActiveItem('lastest')} onClick={this.handleItemClick('lastest')} href='/lastest'/>
        <Dropdown item text='Genres'>
          <Dropdown.Menu>
            {genres.map(genre => (<Dropdown.Item key={genre.id} href={`/genres/${genre.id}`}>{genre.name}</Dropdown.Item>))}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item position='right'>
          <Input type='text' placeholder='Search...' action onChange={this.handleOnSearchInputChange}>
            <input />
            <Button type='submit' href={`/search?query=${this.state.query}`} icon='search'/>
          </Input>
        </Menu.Item>
      </Menu>
    );
  };
}
