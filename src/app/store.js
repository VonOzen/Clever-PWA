import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import appReducer from './reducers/appReducer';

export default createStore(
    combineReducers({
        app: appReducer
    }),
    {},
    applyMiddleware(createLogger({}))
);
