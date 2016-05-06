import { createStore, applyMiddleware, compose } from 'redux';
import appReducer                                from '../reducers';
import thunk                                     from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk)
);

export default function configureStore(initialState) {
  const store = createStore(appReducer, initialState, enhancer);
  return store;
}
