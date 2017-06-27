import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react';

export default class NavigationBar extends Component {
  state = { activeItem: 'lastest' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleSearchIconClick = (e, target) => alert(target);

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='lastest' active={activeItem === 'lastest'} onClick={this.handleItemClick} />
        <Menu.Item name='genre' active={activeItem === 'genre'} onClick={this.handleItemClick} />
        <Menu.Item name='collection' active={activeItem === 'collection'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' onClick={this.handleSearchIconClick}/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  };
}
