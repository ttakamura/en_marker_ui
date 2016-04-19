'use strict';
import 'lodash';
import 'babel-polyfill';
import React                         from 'react';
import ReactDOM                      from 'react-dom';
import { Provider }                  from 'react-redux';

import Main                          from './containers/main';
import DevTools                      from './containers/DevTools';
import {initApp, changeOriginalText} from './actions/app';
import configureStore                from './store/configureStore';

const initialState = {
  message: "Hello this is en_marker_ui"
};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Main />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
