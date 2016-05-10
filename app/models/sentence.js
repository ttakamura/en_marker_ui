import uuid                          from 'node-uuid';
import { Record, Map, List }         from 'immutable';
import { Annotation, AnnotationMap, AnnotationKeysList } from './annotation';

export class Token extends Record({ id: null, word: null, annotations: Map() }) {
  constructor({ word, id, annotations }) {
    super({
      word,
      id: (id || uuid.v1()),
      annotations: (annotations || new Map()),
    });
  }
  addAnnotate(key) {
    return this.setIn(['annotations', key], AnnotationMap.get(key).set('checked', true));
  }
  removeAnnotate(key) {
    return this.deleteIn(['annotations', key]);
  }
  allAnnotations() {
    return AnnotationKeysList.map((annot) => {
      if (!!this.annotations.get(annot.key)) {
        return this.annotations.get(annot.key);
      } else {
        return annot;
      }
    });
  }
  toAnnotatedText() {
    let text = this.word;
    this.annotations.forEach((annot, key) => {
      text = `<${annot.key}>${text}</${annot.key}>`;
    });
    return text;
  }
  annotationKeysAsCssClass() {
    const names = [];
    this.annotations.forEach((annot, key) => {
      names.push(`annot_${key}`);
    });
    return names.join(' ');
  }
  static allAnnotations() {
    return AnnotationKeysList;
  }
  static fromText(text) {
    return new List(text.split(' ').map(t => new Token({ word: t })));
  }
  static fromJS(token) {
    let annotations = new Map();
    for (var key in token.annotations) {
      let annot = token.annotations[key];
      annotations = annotations.set(key, new Annotation(annot));
    }
    return new Token({ word: token.word, id: token.id, annotations });
  }
}

export class Sentence extends Record({ id: null, source: null, tokens: List() }) {
  constructor({ source, id, tokens }) {
    super({
      source,
      id: (id || uuid.v1()),
      tokens: (tokens || Token.fromText(source)),
    });
  }
  findTokenIndex(tokenId) {
    return this.tokens.findKey((t) => t.id === tokenId);
  }
  updateToken(tokenId, updater) {
    const index = this.findTokenIndex(tokenId);
    return this.updateIn(['tokens', index], updater);
  }
  toAnnotatedText() {
    const texts = [];
    let currentAnnotations = [];
    let prevAnnotations = [];

    this.tokens.forEach((t) => {
      currentAnnotations = [];
      prevAnnotations.forEach((key) => {
        if (!t.annotations.get(key)) {
          texts.push(`</${key}>`);
        }
      });
      texts.push(' ');

      t.annotations.forEach((annot, key) => {
        if (!prevAnnotations.find((k) => k === key)) {
          texts.push(`<${key}>`);
        }
        currentAnnotations.push(key);
      });
      texts.push(t.word);
      prevAnnotations = currentAnnotations;
    });

    currentAnnotations.forEach((key) => {
      texts.push(`</${key}>`);
    });

    return texts.concat(['\n\n']).join('');
  }
  static fromJS(state) {
    let tokens = new List();
    state.tokens.forEach((t) => {
      tokens = tokens.push(Token.fromJS(t));
    });
    return new Sentence({ source: state.source, id: state.id, tokens });
  }
}

// s = new Sentence({source: 'hello world'})
// s.updateIn(['tokens', 0], (t) => t.addAnnotate('sj'))
