import React from 'react';
import { render } from 'react-dom';
import { App } from './containers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';
import { getMovieById } from './redux/reducers/movies';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(getMovieById(76341)).then(() => console.log(store.getState()));
registerServiceWorker();
