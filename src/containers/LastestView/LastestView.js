import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DimmerLoader, MovieList } from '../../components/';
import { getLastest } from  '../../redux/reducers/movies';
import { Segment } from 'semantic-ui-react';

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
      <Segment>
        <h1>Lastest Movies</h1>
        {
          loading ? (<DimmerLoader/>) : (<MovieList movies={results}/>)
        }
      </Segment>


    );
  }

}

const mapStateToProps = (state, ownProps) => ({
    list: state.moviesReducer.list,
    loading: state.moviesReducer.loading,
})

export default connect(mapStateToProps)(LastestView);
