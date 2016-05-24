import config                from './config';
import { Record, Map, List } from 'immutable';
import { Sentence, Token }   from './models/sentence';

export function convertToSentences(apiResult) {
  return apiResult.sentences.map((s) => {
    const source = [];
    let tokens = new List();
    s.forEach((t) => {
      if (t.source !== '<bos>' && t.source !== '<eos>') {
        let token = new Token({ word: t.source });
        Object.keys(t.annotation).forEach((key) => {
          if (key !== '<->') {
            token = token.addAnnotate(key.replace('<', '').replace('>', ''));
          }
        });
        source.push(t.source);
        tokens = tokens.push(token);
      }
    });
    return new Sentence({ source: source.join(' '), tokens });
  });
}

export function predict(text) {
  const source = encodeURIComponent(text);
  const url    = `http://${config().api_server.host}/predict?source=${source}`;
  return new Promise((resolve, reject) => {
    fetch(url, { mode: 'cors' })
      .then((x) => x.json())
      .then((x) => resolve(convertToSentences(x)))
      .catch(reject);
  });
}
