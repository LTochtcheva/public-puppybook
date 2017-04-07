// //to make a smart container we are using connect
// import { connect } from 'react-redux';
// import store from './store';

// //we need a dumb component to pass props to
// import AllPuppies from './AllPuppies';
// import {loadAllPuppiesThunk} from './action-creators';



// const hardcodedPuppies = [
//   { id: 1, name: 'Cody' },
//   { id: 2, name: 'Ben' },
//   { id: 3, name: 'Bubba' }
//   ];

// const mapStateToProps = (state) => {
//   return {
//     allPuppies: state.allPuppies
//   }
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLoadPuppies: function() {
//       dispatch(loadAllPuppiesThunk(hardcodedPuppies));
//     }
//   }
// };


// const AllPuppiesContainer = connect(mapStateToProps,mapDispatchToProps)(AllPuppies);
// export default AllPuppiesContainer;
import {connect} from 'react-redux';
import store from './store';

import AllPuppies from './AllPuppies';
import {loadPuppies} from './action-creators';

const  hardCodedData = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

const mapStateToProps = (state) => {
  return {
    allPuppies: state.allPuppies
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPuppies: () => {
      dispatch(loadPuppies());
    }
  }
}
const AllPuppiesContainer = connect(mapStateToProps, mapDispatchToProps)(AllPuppies);
export default AllPuppiesContainer;

