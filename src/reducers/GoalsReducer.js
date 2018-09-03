import { combineReducers } from 'redux';
import { GET_GOALS_1, GET_GOALS_1_ERROR, GET_GOALS_2, GET_GOALS_2_ERROR, GET_GOALS_3, GET_GOALS_3_ERROR } from '../actions/types';

const getGoalsOne = (state = false, action) => {
    switch(action.type) {
        case GET_GOALS_1:
            return action.goalsOne;
        case GET_GOALS_1_ERROR:
            return action.errorMessage;
        default:
            return state;
    }
};

const getGoalsTwo = (state = false, action) => {
    switch(action.type) {
        case GET_GOALS_2:
            return action.goalsTwo;
        case GET_GOALS_2_ERROR:
            return action.errorMessage;
        default:
            return state;
    }
};

const getGoalsThree = (state = false, action) => {
    switch(action.type) {
        case GET_GOALS_3:
            return action.goalsThree;
        case GET_GOALS_3_ERROR:
            return action.errorMessage;
        default:
            return state;
    }
};

export default combineReducers({
    getGoalsOne,
    getGoalsTwo,
    getGoalsThree
});
