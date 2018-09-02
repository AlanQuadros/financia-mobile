import React, { Component } from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {connect} from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';


import LoginScreen from "../screens/LoginScreen";
import HelloKidScreen from '../screens/HelloKidScreen';
import NewAccountScreen from '../screens/NewAccountScreen';
import KidsGoalsScreen from '../screens/KidsGoalsScreen';
import MeuPerfilScreen from '../screens/MeuPerfilScreen';
import ContaCorrenteScreen from '../screens/ContaCorrenteScreen';
import MetasScreen from '../screens/MetasScreen';
import ChatbotScreen from '../screens/ChatbotScreen';

import * as LoginActions from '../actions/LoginActions'
import { colors } from '../resources/Colors';


const NavigationStack = isLogged => createStackNavigator({
    TabNavigation: {
        screen: TabNavigation
    },
    LoginScreen: {
        screen: LoginScreen
    },    
    KidsGoalsScreen: {
        screen: KidsGoalsScreen
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
    headerMode: 'none'
    // initialRouteName: isLogged ? 'TabNavigation' : 'LoginScreen',
    // initialRouteName: 'Picture',
});

const TabNavigation = createBottomTabNavigator({
    MeuPerfil: {
        screen: MeuPerfilScreen,
        navigationOptions: {
            tabBarLabel: 'Meu Perfil',
        }
    },
    ContaCorrente: {
        screen: ContaCorrenteScreen,
        navigationOptions: {
            tabBarLabel: 'Conta Corrente'
        }
    },
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
        }
    }),
    initialRouteName: 'Metas',
    tabBarOptions: {
        activeTintColor: colors.cardText,
        inactiveTintColor: colors.cardText,
    },
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
