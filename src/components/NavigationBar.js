import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react';

const items = ['lastest', 'genre', 'collection'];

export default class NavigationBar extends Component {
  state = { activeItem: 'lastest' };

  handleItemClick = (name) => () => this.setState({ activeItem: name });

  handleSearchIconClick = (e, target) => alert(target);

  isActiveItem = (item) => this.state.activeItem === item;

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        {items.map(item => (
          <Menu.Item name={item} key={item} active={this.isActiveItem(item)} onClick={this.handleItemClick(item)} />
        ))}
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' onClick={this.handleSearchIconClick}/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  };
}
