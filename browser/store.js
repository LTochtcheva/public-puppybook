// import {createStore, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducer';

// export default createStore(reducer, applyMiddleware(thunkMiddleware));
import reducer from './reducer';
import {createStore} from 'redux';

export default createStore(reducer);
