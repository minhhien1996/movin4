import React, { Component } from 'react';
import { Table, Menu, Icon, } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Pagination extends Component {

  render() {
    const { currentPage, totalPage, handlePageNumbeClick } = this.props;
    return (
      <Table basic='very'>
        <Table.Row>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            {
              Array.from({length: totalPage}, (v, i) => (i + 1)).map(pageNumber => (<Menu.Item as='a' number={pageNumber} onClick={handlePageNumbeClick}>{pageNumber}</Menu.Item>))
            }
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Table.Row>
      </Table>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  handlePageNumbeClick: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPage: 2,
  handlePageNumbeClick: () => alert('clicked')
};

export default Pagination;
