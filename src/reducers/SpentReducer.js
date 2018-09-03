import { combineReducers } from 'redux';
import { GET_SPENTS_1, GET_SPENTS_1_ERROR, GET_SPENTS_2, GET_SPENTS_2_ERROR, GET_SPENTS_3, GET_SPENTS_3_ERROR } from '../actions/types';

const getSpentsOne = (state = false, action) => {
    switch(action.type) {
        case GET_SPENTS_1:
            return action.spentsOne;
        case GET_SPENTS_1_ERROR:
            return action.errorMessage;
        default:
            return state;
    }
};

const getSpentsTwo = (state = false, action) => {
    switch(action.type) {
        case GET_SPENTS_2:
            return action.spentsTwo;
        case GET_SPENTS_2_ERROR:
            return action.errorMessage;
        default:
            return state;
    }
};

const getSpentsThree = (state = false, action) => {
    switch(action.type) {
        case GET_SPENTS_3:
            return action.spentsThree;
        case GET_SPENTS_3_ERROR:
            return action.errorMessage;
        default:
            return state;
    }
};

export default combineReducers({
    getSpentsOne,
    getSpentsTwo,
    getSpentsThree
});
