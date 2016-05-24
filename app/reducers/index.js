import { combineReducers } from 'redux-immutable';
import { List }            from 'immutable';
import { Sentence }        from '../models/sentence';

const welcomeReducer = (state = '', action) => {
  switch (action.type) {
  case 'INIT_APP':
    return action.message;
  default:
    return state;
  }
};

const currentSentence = (state, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_SENTENCE': {
      return action.sentence;
    }
    case 'ADD_ANNOTATION': {
      return state.updateToken(action.token_id, (t) => t.addAnnotate(action.annot_key));
    }
    case 'REMOVE_ANNOTATION': {
      return state.updateToken(action.token_id, (t) => t.removeAnnotate(action.annot_key));
    }
    case 'ADD_ALL_ANNOTATION': {
      let nextState = state;
      action.token_ids.forEach((id) => {
        nextState = nextState.updateToken(id, (t) => t.addAnnotate(action.annot_key));
      });
      return nextState;
    }
    case 'REMOVE_ALL_ANNOTATION': {
      let nextState = state;
      action.token_ids.forEach((id) => {
        nextState = nextState.updateToken(id, (t) => t.removeAnnotate(action.annot_key));
      });
      return nextState;
    }
    case 'SUCCESS_EXPORT_FILE': {
      return new Sentence({ source: '' });
    }
    default: {
      return state;
    }
  }
};

const sentences = (state = new List(), action) => {
  switch (action.type) {
  case 'SUCCESS_UPDATE_ORIGINAL': {
    return action.sentences;
  }
  default: {
    return state;
  }}
};

const showExportedMessage = (state = false, action) => {
  switch (action.type) {
  case 'SUCCESS_EXPORT_FILE': {
    return true;
  }
  case 'CLOSE_EXPORTED_MESSAGE': {
    return false;
  }
  default:
    return state;
  }
};

const originalText = (state = '', action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const appReducer = combineReducers({
  message: welcomeReducer,
  currentSentence,
  sentences,
  showExportedMessage,
  originalText,
});

export default appReducer;
