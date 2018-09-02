import {throttle} from "lodash";
import { GOALS } from "../resources/Urls";

const buscarMetasPorPrazo = (idPrazo, id) => (dispatch) => {
    return fetch(`${GOALS}/${idPrazo}/adult/${id}`)
        .then(response => response.json())
        .then(responseJson => {
            dispatch({
                type: `GET_GOALS_${idPrazo}`,
                goalsOne: responseJson
            });

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: `GET_GOALS_${idPrazo}_ERROR`,
                errorMessage: error.message
            });
        });
}

export const _buscarMetasPorPrazo = throttle(buscarMetasPorPrazo, 1000);