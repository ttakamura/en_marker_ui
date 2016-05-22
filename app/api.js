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
  fetch(`http://${config().api_server.host}/predict?source=${source}`, { mode: 'cors' })
    .then((x) => x.json())
    .then((x) => console.log(convertToSentences(x)));
}
