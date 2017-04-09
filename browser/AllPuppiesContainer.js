// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLoadPuppies: function() {
//       dispatch(loadAllPuppiesThunk(hardcodedPuppies));
//     }
//   }
// };


//to make a smart container we are using connect
import {connect} from 'react-redux';
import store from './store';
//we need a dumb component to pass props to
import AllPuppies from './AllPuppies';
import {loadPuppies} from './action-creators';

const  hardCodedData = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

const mapStateToProps = (state) => {

  return {
    allPuppies: state.allPuppiesReducer.allPuppies
  }
};

const AllPuppiesContainer = connect(mapStateToProps)(AllPuppies);
export default AllPuppiesContainer;

