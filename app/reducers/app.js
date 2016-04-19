import { combineReducers } from 'redux';

const originalTextReducer = (state="", action) => {
    switch (action.type) {
    case 'UPDATE_ORIGINAL':
        return action.text;
    default:
        return state;
    }
}

const welcomeReducer = (state="", action) => {
    switch (action.type) {
    case 'INIT_APP':
        return action.message;
    default:
        return state;
    }
};

const appReducer = combineReducers({
    message: welcomeReducer,
    originalText: originalTextReducer
});

export default appReducer;
