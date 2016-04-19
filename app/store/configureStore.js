import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import appReducer from '../reducers';
import DevTools from '../containers/DevTools';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

const enhancer = compose(
  // applyMiddleware(d1, d2, d3),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);

export default function configureStore(initialState) {
  const store = createStore(appReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
                      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
                     );
  }

  return store;
}
