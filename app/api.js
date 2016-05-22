import config from './config';
import { Sentence, Token } from './models/sentence';

export function predict(text) {
  const source = encodeURIComponent(text);
  fetch(`http://${config().api_server.host}/predict?source=${source}`, { mode: 'cors' })
    .then((x) => x.json())
    .then((x) => console.log(x));
}
