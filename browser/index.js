
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import store from './store';
import AllPuppiesContainer from './AllPuppiesContainer';
import {loadPuppies} from './action-creators';

const onLoadFunc = store.dispatch(loadPuppies());

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' onEnter={onLoadFunc}>
        <Route path='puppies' component={AllPuppiesContainer} />
        <IndexRoute component={AllPuppiesContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
