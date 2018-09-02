import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import LoginReducer from './LoginReducer';
import GoalsReducer from './GoalsReducer';

const createMainStore = () => {
    const reducers = combineReducers({
        LoginReducer,
        GoalsReducer
    });

    return createStore(reducers, applyMiddleware(thunk));
};

export default createMainStore;
