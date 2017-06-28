import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar';
import LastestView from '../LastestView/';
import MovieDetailView from '../MovieDetailView/';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        {
          // <MovieDetailView movieId="76341" />
          <LastestView/>
        }
      </div>
    );
  }
}

export default App;
