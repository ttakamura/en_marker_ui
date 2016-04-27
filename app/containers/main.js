import { connect }  from 'react-redux';
import { Main }     from '../components/main';
import * as actions from '../actions';

const MainContainer = connect(
  (state) => ({
    message: state.get('message'),
    currentSentence: state.get('currentSentence'),
  }),
  (dispatch) => ({
    updateOriginalText: (text) => {
      dispatch(actions.changeOriginalText(text));
    },
  })
)(Main);

export default MainContainer;
