import React, { Component } from 'react';
import { Icon, Segment } from 'semantic-ui-react';

export default class Footer extends Component {
  render() {
    return (
      <Segment padded='very' textAlign='center'>
        <div style={{fontSize: '14px'}}>
          Made by Minh Hiển with <Icon color='red' name='empty heart'/>
        </div>
        <div style={{fontSize: '14px'}}>
          <a href='//fb.co/minhhien.dole' target='_blank'><Icon name='facebook square' link/></a>
          <a href='//minhhien.me' target='_blank'><Icon name='home' link/></a>
          <a href='//www.instagram.com/minhhien1996' target='_blank'><Icon name='instagram' link/></a>
        </div>
      </Segment>
    );
  }
}
