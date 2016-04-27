import { Map, List } from 'immutable';

export function initialState() {
  return new Map({
    message: 'Hello this is en_marker_ui',
    currentSentence: null,
    sentences: new List(),
  });
}
