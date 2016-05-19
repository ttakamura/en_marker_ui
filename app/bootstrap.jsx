import 'lodash';
import 'babel-polyfill';
import React                from 'react';
import ReactDOM             from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root                 from './Root';
import * as actions         from './actions';
import configureStore       from './store/configureStore';
import { initialState }     from './models';

injectTapEventPlugin();

const store = configureStore(initialState());

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);

// TODO: remove
window.store   = store;
window.actions = actions;

// temp
window.hoge = (text) => {
  const source  = encodeURIComponent(text);
  fetch(`http://localhost:3111/predict?source=${source}`, { mode: 'cors' })
    .then((x) => x.json())
    .then((x) => console.log(x));
};
