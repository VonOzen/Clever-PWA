import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css/sass/_reset.scss';
import App from './js/components/container/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

const appReducer = (state = {
    bgColorClass: "red"
}, action) => {
    switch (action.type) {
        case "CHANGE_BGCOLOR":
            state = {
                ...state,
                bgColorClass: action.payload
            }
            break;
        default:
            break;
    }
    return state;
};

const store = createStore(
    combineReducers({appReducer}),
    {},
    applyMiddleware(createLogger({}))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);
