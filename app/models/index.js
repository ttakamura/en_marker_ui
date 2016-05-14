import { Map, List } from 'immutable';
import { Sentence  } from './sentence';

export function initialState() {
  return new Map({
    message: 'EnMarker UI',
    currentSentence: null,
    sentences: new List(),
    originalText: '',
  });
}

export function stateFromJS(stateJson) {
  return new Map({
    message: stateJson.message,
    currentSentence: Sentence.fromJS(stateJson.currentSentence),
    sentences: new List(stateJson.sentences.map((s) => Sentence.fromJS(s))),
    originalText: stateJson.originalText,
  });
}
