
import axios from 'axios';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const LOAD_PUPPIES = 'LOAD_PUPPIES';
export const SELECT_PUPPY = 'SELECT_PUPPY';

//plain vanilla action creator
export const receivePuppies = (puppies) => {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  }
};
export const selectPuppy = (puppy) => {
  return {
    type: SELECT_PUPPY,
    selectedPuppy: puppy
  }
}

//this is thunk creator, it returns a function(a thunk) instead of an action
export const loadPuppies = () => {
  return (dispatch) => {
    axios.get('/api/puppies')
    .then(res => res.data)
    .then(puppies => dispatch(receivePuppies(puppies)))
    .catch(err => console.error(err));
  }
}
