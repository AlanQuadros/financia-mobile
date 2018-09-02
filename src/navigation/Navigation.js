import React, { Component } from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {connect} from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';


import LoginScreen from "../screens/LoginScreen";
import HelloKidScreen from '../screens/HelloKidScreen';
import NewAccountScreen from '../screens/NewAccountScreen';
import MeuPerfilScreen from '../screens/MeuPerfilScreen';
import ContaCorrenteScreen from '../screens/ContaCorrenteScreen';
import MetasScreen from '../screens/MetasScreen';
import ChatbotScreen from '../screens/ChatbotScreen';

import * as LoginActions from '../actions/LoginActions'
import { colors } from '../resources/Colors';


const NavigationStack = isLogged => createStackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    HelloKidScreen: {
        screen: HelloKidScreen
    },
    NewAccountScreen: {
        screen: NewAccountScreen
    },
    TabNavigation: {
        screen: TabNavigation
    }
},
{
    screenProps: isLogged,
    // initialRouteName: isLogged ? 'TabNavigation' : 'LoginScreen',
    // initialRouteName: 'Picture',
});

const TabNavigation = createBottomTabNavigator({
    MeuPerfil: MeuPerfilScreen,
    ContaCorrente: ContaCorrenteScreen,
    Metas: MetasScreen,
    Chatbot: ChatbotScreen
},
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'MeuPerfil') {
                iconName = `ios-contact`;
            } else if (routeName === 'ContaCorrente') {
                iconName = `ios-wallet`;
            } else if (routeName === 'Metas') {
                iconName = `ios-flag`;
            } else if (routeName === 'Chatbot') {
                iconName = `ios-book`;
            }

            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: colors.cardText,
        inactiveTintColor: colors.cardText,
    },
});

// TabNavigation.navigationOptions = ({ navigation }) => {
//     const { routes, index } = navigation.state;
//     const navigationOptions = {};

//     if (routes[index].routeName === 'MeuPerfil') {
//         navigationOptions.title = 'RandomPics';
//     } else if (routes[index].routeName === 'Settings') {
//         navigationOptions.title = 'Settings';
//     }

//     return navigationOptions;
// };


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
