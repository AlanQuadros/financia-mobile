import { combineReducers } from 'redux';
import { USER_LOGGED, USER_LOGOFF, USER_LOGIN_ERROR } from '../actions/types';

const isLogged = (state = false, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return true;
        case USER_LOGOFF:
            return false;
        case USER_LOGIN_ERROR:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    isLogged
});
