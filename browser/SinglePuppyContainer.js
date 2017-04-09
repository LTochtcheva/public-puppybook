import {connect} from 'react-redux';
import store from './store';

import SinglePuppy from './SinglePuppy';

const mapStateToProps = (state) => {

  return {
    singlePuppy: state.selectedPuppyReducer.selectedPuppy
  }
};

const singlePuppyContainer = connect(mapStateToProps)(SinglePuppy);
export default singlePuppyContainer;
