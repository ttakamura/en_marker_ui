import { connect }  from 'react-redux';
import { Main }     from '../components/main';
import * as actions from '../actions';

const MainContainer = connect(
  (state) => {
    return state;
  },
  (dispatch) => {
    return {
      updateOriginalText: (text) => {
        dispatch(actions.changeOriginalText(text));
      }
    };
  }
)(Main);

export default MainContainer;
