

import {RECEIVE_PUPPIES} from './action-creators';
import {LOAD_PUPPIES} from './action-creators';


const initialState = {allPuppies: []};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
     switch(action.type) {

        case RECEIVE_PUPPIES:
          newState.allPuppies = action.receivedPuppies;
          break;

        case LOAD_PUPPIES:
          newState.allPuppies = action.loadedPuppies;
          break;

        default:
          return state;
     }

    return newState;
}

