import uuid                          from 'node-uuid';
import { Record, Map, List }         from 'immutable';
import { AnnotationMap, Annotation } from './annotation';

export class Token extends Record({ id: null, word: null, annotations: Map() }) {
  constructor({ word }) {
    super({
      word,
      id: uuid.v1(),
      annotations: new Map({
        sj: new Annotation({ key: 'sj', name: 'subject', checked: true }),
      }),
    });
  }
  addAnnotate(key) {
    return this.setIn(['annotations', key], AnnotationMap.get(key).set('checked', true));
  }
  removeAnnotate(key) {
    return this.deleteIn(['annotations', key]);
  }
  allAnnotations() {
    return AnnotationMap.toList().map((annot) => {
      if (!!this.annotations.get(annot.key)) {
        return this.annotations.get(annot.key);
      } else {
        return annot;
      }
    });
  }
  static allAnnotations() {
    return AnnotationMap.toList();
  }
}

export class Sentence extends Record({ id: null, source: null, tokens: List() }) {
  constructor({ source }) {
    const tokens = source.split(' ').map(t => new Token({ word: t }));
    super({
      source,
      id: uuid.v1(),
      tokens: new List(tokens),
    });
  }
}

// s = new Sentence({source: 'hello world'})
// s.updateIn(['tokens', 0], (t) => t.addAnnotate('sj'))
