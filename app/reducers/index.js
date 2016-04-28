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
  case 'UPDATE_ORIGINAL':
    return new Sentence({ source: action.text });
  case 'ADD_ANNOTATION':
    const index = state.tokens.findKey((t) => t.id === action.token_id);
    return state.updateIn(['tokens', index], (t) => t.addAnnotate(action.annot_key));
  case 'REMOVE_ANNOTATION':
    const index2 = state.tokens.findKey((t) => t.id === action.token_id);
    return state.updateIn(['tokens', index2], (t) => t.removeAnnotate(action.annot_key));
  default:
    return state;
  }
};

const sentences = (state = new List(), action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const appReducer = combineReducers({
  message: welcomeReducer,
  currentSentence,
  sentences,
});

export default appReducer;
