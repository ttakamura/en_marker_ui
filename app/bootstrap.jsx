import 'lodash';
import 'babel-polyfill';
import React                from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';

import Main             from './containers/main';
import DevTools         from './containers/DevTools';
import * as actions     from './actions';
import configureStore   from './store/configureStore';
import { initialState } from './models';

injectTapEventPlugin();

const store = configureStore(initialState());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Main />
        <DevTools />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);

store.dispatch(actions.changeOriginalText('Hello world'));

// TODO: remove
window.store   = store;
window.actions = actions;
