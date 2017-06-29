import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DimmerLoader, MovieList } from '../../components/';
import { getLastest, getListByGenreId, searchMovie } from  '../../redux/reducers/movies';
import { Container, Header } from 'semantic-ui-react';
import queryString from 'query-string';

class MovieListView extends Component {
  componentDidMount() {
    // redux help us with the injection here
    const { dispatch, type, location } = this.props;
    const searchQueryString  = location ? this.props.location.search : '';
    const searchQueryObject = queryString.parse(searchQueryString);
    const { page } = searchQueryObject;
    switch (type) {
      case 'genre':
        const { genreId } = this.props.match.params;
        dispatch(getListByGenreId(genreId, page));
        break;
      case 'lastest':
        dispatch(getLastest(page));
        break;
      case 'search':
        const { query } = searchQueryObject
        dispatch(searchMovie(query, page));
        break;
      default:
        dispatch(getLastest());
        break;
    }
  }
  render() {
    const { loading, list, type, pagination } = this.props;
    return (
      <Container>
        <Header size="huge">{
          type
        }</Header>
        {
          loading ? (<DimmerLoader/>) : (<MovieList movies={list} pagination={pagination}/>)
        }
      </Container>


    );
  }

}

const mapStateToProps = (state, ownProps) => ({
    pagination: state.moviesReducer.pagination,
    list: state.moviesReducer.list,
    loading: state.moviesReducer.loading,
    type: ownProps.type || 'lastest', // default props
})

export default connect(mapStateToProps)(MovieListView);
