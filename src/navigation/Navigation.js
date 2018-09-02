import React, { Component } from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {connect} from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import HelloKidScreen from '../screens/HelloKidScreen';
import NewAccountScreen from '../screens/NewAccountScreen';

import * as LoginActions from '../actions/LoginActions'


const NavigationStack = isLogged => createStackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    HelloKidScreen: {
        screen: HelloKidScreen
    },
    NewAccountScreen: {
        screen: NewAccountScreen
    }
},
{
    screenProps: isLogged,
    // initialRouteName: isLogged ? 'TabNavigation' : 'LoginScreen',
    // initialRouteName: 'Picture',
});

class Navigation extends Component {

    render() {
        const Navigator = NavigationStack(this.props.isLogged);
        return (
            <Navigator screenProps={{isLogged: this.props.isLogged}} />
        );
    }
}

const mapeador = state => {
    return {
        isLogged: state.LoginReducer.isLogged
    };
};

Navigation = connect(mapeador, LoginActions)(Navigation);
export default Navigation;
