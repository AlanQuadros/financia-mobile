import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from './LoginReducer';
import thunk from "redux-thunk";

const createMainStore = () => {
    const reducers = combineReducers({
        LoginReducer
    });

    return createStore(reducers, applyMiddleware(thunk));
};

export default createMainStore;
