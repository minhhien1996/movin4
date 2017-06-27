import React, { Component } from 'react';
import MovieList from '../../components/MovieList';
import NavigationBar from '../../components/NavigationBar';
import LastestView from '../LastestView/';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <LastestView />
      </div>
    );
  }
}

export default App;
