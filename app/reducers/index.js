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
  if (state === null) {
    state = new Sentence({ source: '' });
  }
  switch (action.type) {
    case 'UPDATE_ORIGINAL': {
      return new Sentence({ source: action.text });
    }
    case 'ADD_ANNOTATION': {
      return state.updateToken(action.token_id, (t) => t.addAnnotate(action.annot_key));
    }
    case 'REMOVE_ANNOTATION': {
      return state.updateToken(action.token_id, (t) => t.removeAnnotate(action.annot_key));
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
  default:
    return state;
  }
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

const appReducer = combineReducers({
  message: welcomeReducer,
  currentSentence,
  sentences,
  showExportedMessage,
});

export default appReducer;
