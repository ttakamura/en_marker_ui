import { createStore } from 'redux';

const initialState = {};

export default function configureStore(reducer) {
    const store = createStore(reducer, initialState,
      window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
}
