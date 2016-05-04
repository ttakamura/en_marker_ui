import { Map, List } from 'immutable';
import { Sentence  } from './sentence';

export function initialState() {
  return new Map({
    message: 'Hello this is en_marker_ui',
    currentSentence: null,
    sentences: new List(),
  });
}

export function stateFromJS(stateJson) {
  return new Map({
    message: stateJson.message,
    currentSentence: Sentence.fromJS(stateJson.currentSentence),
    sentences: new List(stateJson.sentences),
  });
}
