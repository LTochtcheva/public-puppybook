
import axios from 'axios';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const LOAD_PUPPIES = 'LOAD_PUPPIES';

//plain vanilla action creator
export const receivePuppies = (puppies) => {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  }
};

//this is thunk creator, it returns a function(a thunk) instead of an action
export const loadPuppies = () => {
  return (dispatch) => {
    axios.get('/api/puppies')
    .then(res => res.data)
    .then(puppies => dispatch(receivePuppies(puppies)))
    .catch(err => console.error(err));
  }
}
