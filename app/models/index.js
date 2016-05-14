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
  let currentSentence = null;
  if (stateJson.currentSentence && stateJson.currentSentence.word !== '') {
    currentSentence = Sentence.fromJS(stateJson.currentSentence);
  }

  return new Map({
    message: stateJson.message,
    currentSentence,
    sentences: new List(stateJson.sentences.map((s) => Sentence.fromJS(s))),
    originalText: stateJson.originalText,
  });
}
