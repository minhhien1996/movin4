import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DimmerLoader, MovieList } from '../../components/';
import { getLastest, getListByGenreId } from  '../../redux/reducers/movies';
import { Container, Header } from 'semantic-ui-react';

class MovieListView extends Component {
  componentDidMount() {
    // redux help us with the injection here
    const { dispatch, type } = this.props;
    console.log("PROPS", this.props);
    switch (type) {
      case 'genre':
        const { genreId } = this.props.match.params;
        dispatch(getListByGenreId(genreId));
        break;
      case 'lastest':
        dispatch(getLastest());
        break;
      default:
        dispatch(getLastest());
        break;
    }
  }
  render() {
    const { loading, list } = this.props;
    const { results } = list;
    return (
      <Container>
        <Header size="huge">Lastest Movies</Header>
        {
          loading ? (<DimmerLoader/>) : (<MovieList movies={results}/>)
        }
      </Container>


    );
  }

}

const mapStateToProps = (state, ownProps) => ({
    list: state.moviesReducer.list,
    loading: state.moviesReducer.loading,
    type: ownProps.type || 'lastest', // default props
})

export default connect(mapStateToProps)(MovieListView);
