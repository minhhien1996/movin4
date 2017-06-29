import React from 'react';
import { render } from 'react-dom';
import { LastestView, MovieDetailView } from './containers';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import NavigationBar from './components/NavigationBar';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

const store = createStore(combineReducers({
  ...reducers,
  routing: routerReducer
}), applyMiddleware(thunk, historyMiddleware));


// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

render(
  <Provider store={store}>
    <div>
      <NavigationBar />
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={LastestView}/>
          <Route path="/lastest" component={LastestView}/>
          <Route path="/detail/:movieId" component={MovieDetailView}/>
        </div>
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
