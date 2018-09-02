import {throttle} from "lodash";
import { GOALS } from "../resources/Urls";
import { GET_GOALS_1, GET_GOALS_1_ERROR, GET_GOALS_2, GET_GOALS_2_ERROR, GET_GOALS_3, GET_GOALS_3_ERROR } from '../actions/types';

const buscarMetasCurtoPrazo = (id) => (dispatch) => {
    return fetch(`${GOALS}/1/adult/${id}`)
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: GET_GOALS_1,
                goalsOne: responseJson
            });

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: GET_GOALS_1_ERROR,
                errorMessage: error.message
            });
        });
}

const buscarMetasMedioPrazo = (id) => (dispatch) => {
    return fetch(`${GOALS}/2/adult/${id}`)
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: GET_GOALS_2,
                goalsTwo: responseJson
            });

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: GET_GOALS_2_ERROR,
                errorMessage: error.message
            });
        });
}

const buscarMetasLongoPrazo = (id) => (dispatch) => {
    return fetch(`${GOALS}/3/adult/${id}`)
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: GET_GOALS_3,
                goalsThree: responseJson
            });

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: GET_GOALS_3_ERROR,
                errorMessage: error.message
            });
        });
}

export const _buscarMetasCurtoPrazo = throttle(buscarMetasCurtoPrazo, 0);
export const _buscarMetasMedioPrazo = throttle(buscarMetasMedioPrazo, 0);
export const _buscarMetasLongoPrazo = throttle(buscarMetasLongoPrazo, 0);