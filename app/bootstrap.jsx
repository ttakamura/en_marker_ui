'use strict';
import 'lodash';
import 'babel-polyfill';
import React               from 'react';
import ReactDOM            from 'react-dom';
import { combineReducers } from 'redux';
import { Provider }        from 'react-redux';

import Main           from './containers/main';
import appReducer     from './reducers/app';
import { initApp }    from './actions/app';
import configureStore from './store';

const store = configureStore(appReducer);

const render = (store) => {
    ReactDOM.render(
        <Provider store={store}>
          <Main />
        </Provider>,
        document.getElementById('app')
    );
};

store.subscribe(() => render(store));
store.dispatch(initApp("Init App"));
