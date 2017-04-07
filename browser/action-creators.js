// import axios from 'axios';
// //plain vanilla action creator
// export const getAllPuppies = function(puppies) {
//   return {
//     type: 'GET_ALL_PUPPIES',
//     allPuppies: puppies
//   }
// }
// export const loadAllPuppies = function(puppies) {
//   return {
//     type: 'LOAD_PUPPIES',
//     puppies: puppies
//   }
// }

// //thunc action creator

// export const loadAllPuppiesThunk = (puppies) => {
//   return (dispatch) => {
//     axios.get('api/puppies')
//       .then( res => res.data)
//       .then( puppies => {
//         dispatch(loadAllPuppies(puppies));})
//       .catch( err => console.error(err));
//   }
// }
export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const LOAD_PUPPIES = 'LOAD_PUPPIES';

export const receivePuppies = (puppies) => {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  }
};
export const loadPuppies = (puppies) => {
  return {
    type: LOAD_PUPPIES,
    loadedPuppies: puppies
  }
}
