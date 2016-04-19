import { combineReducers } from 'redux';

const welcomeReducer = (state="", action) => {
    switch (action.type) {
    case 'INIT_APP':
        return "action.message";
    default:
        return state;
    }
};

const appReducer = combineReducers({
    message: welcomeReducer
});

export default appReducer;
