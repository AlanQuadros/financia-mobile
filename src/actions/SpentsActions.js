import {throttle} from "lodash";
import { SPENTS } from "../resources/Urls";
import { GET_SPENTS_1, GET_SPENTS_1_ERROR, GET_SPENTS_2, GET_SPENTS_2_ERROR, GET_SPENTS_3, GET_SPENTS_3_ERROR } from '../actions/types';

const buscarGastosFixos = (id) => (dispatch) => {
    return fetch(`${SPENTS}/1/adult/${id}`)
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: GET_SPENTS_1,
                spentsOne: responseJson
            });

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: GET_SPENTS_1_ERROR,
                errorMessage: error.message
            });
        });
}

const buscarGastosSazonais = (id) => (dispatch) => {
    return fetch(`${SPENTS}/2/adult/${id}`)
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: GET_SPENTS_2,
                spentsTwo: responseJson
            });

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: GET_SPENTS_2_ERROR,
                errorMessage: error.message
            });
        });
}

const buscarGastosCredito = (id) => (dispatch) => {
    return fetch(`${SPENTS}/3/adult/${id}`)
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: GET_SPENTS_3,
                spentsThree: responseJson
            });

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: GET_SPENTS_3_ERROR,
                errorMessage: error.message
            });
        });
}

export const _buscarGastosFixos = throttle(buscarGastosFixos, 0);
export const _buscarGastosSazonais = throttle(buscarGastosSazonais, 0);
export const _buscarGastosCredito = throttle(buscarGastosCredito, 0);