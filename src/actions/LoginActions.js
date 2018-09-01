import {AsyncStorage} from 'react-native'
import { throttle } from "lodash";
import {LOGIN, USERS} from "../resources/Urls";

const doLogin = (email, password) => (dispatch) => {
    let user = {
        email: email,
        senha: password
    };

    return fetch(LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((response) => response.json())
        .then((responseJson) => {
            if(!responseJson.error){
                AsyncStorage.setItem('LOGGED', JSON.stringify(true));
                AsyncStorage.setItem('EMAIL', user.email);
                AsyncStorage.setItem('NAME', responseJson.name);
                dispatch({
                    type: "USER_LOGGED"
                });
            }

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: "USER_LOGIN_ERROR",
                errorMessage: error.message
            });
        });
};

const signUp = (name, email, password) => (dispatch) => {
    let user = {
        name: name,
        email: email,
        senha: password
    };

    return fetch(USERS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((response) => response.json())
        .then((responseJson) => {
            if(!responseJson.error){
                AsyncStorage.setItem('LOGGED', JSON.stringify(true));
                AsyncStorage.setItem('EMAIL', user.email);
                AsyncStorage.setItem('NAME', responseJson.name);
                dispatch({
                    type: "USER_LOGGED"
                });
            }

            return responseJson;
        })
        .catch((error) => {
            dispatch({
                type: "USER_LOGIN_ERROR",
                errorMessage: error.message
            });
        });
};

export const logout = () => (dispatch) => {
    AsyncStorage.removeItem('LOGGED');
    AsyncStorage.removeItem('EMAIL');
    AsyncStorage.removeItem('NAME');
    dispatch({
        type: "USER_LOGOFF",
    })
};


export const _doLogin = throttle(doLogin, 5000);
export const _signUp = throttle(signUp, 5000);