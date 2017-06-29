import React, { Component } from 'react';
import { Table, Menu, Icon, } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const makeBaseUrl = (pagination) => {
  switch (pagination.type) {
    case 'genre':
      return `/genres/${pagination.genreId}?&`;
    case 'search':
      return `/search?query=${pagination.keyword}&`;
    case 'lastest':
      return '/lastest?';
    default:
      return '/lastest?';
  }
}

class Pagination extends Component {

  render() {
    const { pagination, handlePageNumbeClick } = this.props;
    const { totalPages, currentPage } = pagination;
    const maxPages = Math.min(totalPages, 10);
    const baseUrl = makeBaseUrl(pagination)
    console.log('pagination', pagination)
    return (
      <Table basic='very'>
        <Table.Row>
          <Menu floated='right' pagination>
            {
              // <Menu.Item as='a' icon key="previous">
              //   <Icon name='left chevron' />
              // </Menu.Item>
            }
            {
              Array.from({length: maxPages}, (v, i) => (i + 1)).map(pageNumber => (
                <Menu.Item as='a'
                  active={pageNumber === currentPage}
                  number={pageNumber} key={pageNumber}
                  href={`${baseUrl}page=${pageNumber}`}>{pageNumber}</Menu.Item>)
              )
            }
            {
              // <Menu.Item as='a' key="next" icon>
              //   <Icon name='right chevron' />
              // </Menu.Item>
            }

          </Menu>
        </Table.Row>
      </Table>
    );
  }
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    genreId: PropTypes.string,
    keyword: PropTypes.string
  }).isRequired,
};

Pagination.defaultProps = {
  pagination: {
    currentPage: 1,
    totalPages: 1
  },
  handlePageNumbeClick: () => console.log('ahaha'),
};

export default Pagination;
