import React from 'react';
import { render } from 'react-dom';
import { App } from './containers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
