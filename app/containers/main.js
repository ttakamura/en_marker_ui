import { connect }  from 'react-redux';
import { Main }     from '../components/main';
import * as actions from '../actions';
import { List }        from 'immutable';

const MainContainer = connect(
  (state) => ({
    message: state.get('message'),
    currentSentence: state.get('currentSentence'),
    showExportedMessage: state.get('showExportedMessage'),
    originalText: state.get('originalText'),
    sentences: state.get('sentences'),
  }),
  (dispatch) => ({
    updateOriginalText: (text) => {
      dispatch(actions.changeOriginalText(text));
    },
    toggleAnnotation: (annot, flag, token) => {
      if (flag) {
        dispatch(actions.addAnnotation(annot, token));
      } else {
        dispatch(actions.removeAnnotation(annot, token));
      }
    },
    toggleAllAnnotation: (annot, flag, tokens) => {
      if (flag) {
        dispatch(actions.addAllAnnotation(annot, tokens));
      } else {
        dispatch(actions.removeAllAnnotation(annot, tokens));
      }
    },
    exportSentence: (sentence) => {
      dispatch(actions.exportToFile(sentence));
    },
    onCloseExportedMessage: () => {
      dispatch(actions.closeExportedMessage());
    },
  })
)(Main);

export default MainContainer;
