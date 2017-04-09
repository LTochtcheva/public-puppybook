
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import store from './store';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppy from './SinglePuppy';
import SinglePuppyContainer from './SinglePuppyContainer'
import {loadPuppies, selectPuppy} from './action-creators';

const hardcodedPuppy = {
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};

const onLoadFunc = store.dispatch(loadPuppies());
const onLoadPuppy = store.dispatch(selectPuppy(hardcodedPuppy));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' onEnter={onLoadFunc}>
        <Route path='puppies' component={AllPuppiesContainer} />
        <IndexRoute component={AllPuppiesContainer}/>
        <Route path='puppies/:puppyId' component={SinglePuppyContainer}  />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
