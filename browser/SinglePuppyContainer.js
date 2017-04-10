import {connect} from 'react-redux';
import store from './store';

import SinglePuppy from './SinglePuppy';

const mapStateToProps = (state) => {
 // console.log('State selected puppy: ', state.selectedPuppy)
  return {

    singlePuppy: state.selectedPuppy
  }
};

const singlePuppyContainer = connect(mapStateToProps)(SinglePuppy);
export default singlePuppyContainer;
