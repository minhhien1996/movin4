import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

class DimmerLoader extends Component {
  render() {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }

}

export default DimmerLoader;
