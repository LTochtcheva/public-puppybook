

import {RECEIVE_PUPPIES,LOAD_PUPPIES,SELECT_PUPPY} from './action-creators';
import {combineReducers} from 'redux';

const hardcodedPuppy = {
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};


const initialState = {allPuppiesReducer: { allPuppies: [] },
                      selectedPuppyReducer: {selectedPuppy: {} }
                     }
//const initialAllPuppiesState = {allPuppies: []};

// export default (state = initialState, action) => {
//   const newState = Object.assign({}, state);
//   switch(action.type) {

//         case RECEIVE_PUPPIES:
//           newState.allPuppies = action.receivedPuppies;
//           break;

//         case SELECT_PUPPY:
//           newState.selectedPuppy = action.selectedPuppy;
//           break;

//         default:
//           return state;
//      }

//     return newState;
// };
const allPuppiesReducer = (state = initialAllPuppiesState, action) => {
  const newState = Object.assign({}, state);
    switch(action.type) {

        case RECEIVE_PUPPIES:
          newState.allPuppies = action.receivedPuppies;
          break;

        default:
          return state;
     }

    return newState;
};

const selectedPuppyReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch(action.type) {

        case SELECT_PUPPY:
          newState.selectedPuppy = action.selectedPuppy;
          break;

        default:
          return state;
     }

    return newState;
};

export default combineReducers(allPuppiesReducer, selectedPuppyReducer);



