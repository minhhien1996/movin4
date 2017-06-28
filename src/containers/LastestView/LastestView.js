import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DimmerLoader, MovieList } from '../../components/';
import { getLastest } from  '../../redux/reducers/movies';
import { Container, Header } from 'semantic-ui-react';

class LastestView extends Component {
  componentDidMount() {
    // redux help us with the injection here
    const { dispatch } = this.props;
    dispatch(getLastest());
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
})

export default connect(mapStateToProps)(LastestView);
