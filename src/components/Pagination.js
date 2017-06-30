import React, { Component } from 'react';
import { Table, Menu, Icon, Segment, } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MAX_PAGES = 3;

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

const numberToCountArray = (length, start = 0) => Array.from({ length }, (v, i) => (i + start));

class Pagination extends Component {

  render() {
    const { pagination, handlePageNumbeClick } = this.props;
    const { totalPages, currentPage } = pagination;
    const maxPages = Math.min(totalPages, MAX_PAGES);
    const baseUrl = makeBaseUrl(pagination)
    console.log('pagination', pagination)
    return (
      <Segment compact style={{ margin: '20 auto'}} size='tiny'>
      <Menu tabular  pagination>
        <Menu.Item as='a' key="first" icon
          key={1}
          href={`${baseUrl}page=${1}`}>
          <Icon name='angle double left' />
        </Menu.Item>
        {
          numberToCountArray(MAX_PAGES, currentPage).map(pageNumber => (
            <Menu.Item as='a'
              active={pageNumber === currentPage}
              key={pageNumber}
              href={`${baseUrl}page=${pageNumber}`}>{pageNumber}</Menu.Item>)
          )
        }
        <Menu.Item disabled>...</Menu.Item>
        <Menu.Item as='a' key="last" icon
          key={totalPages}
          href={`${baseUrl}page=${totalPages}`}>
          <Icon name='angle double right' />
        </Menu.Item>

      </Menu>
      </Segment>
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
