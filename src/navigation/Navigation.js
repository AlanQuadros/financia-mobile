import React, { Component } from 'react';
import { Image } from 'react-native';
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
import ModalTestScreen from '../screens/ModalTestScreen';
import MetasKidScreen from '../screens/MetasKidScreen';

import * as LoginActions from '../actions/LoginActions'
import { colors } from '../resources/Colors';

const wallet = '../../assets/imgs/conta_corrente';

const NavigationStack = isLogged => createStackNavigator({
    
    LoginScreen: {
        screen: LoginScreen
    },   
    TabNavigation: {
        screen: TabNavigation
    }, 
    NewAccountScreen: {
        screen: NewAccountScreen
    },
    ModalTestScreen:{
        screen: ModalTestScreen
    },
    ContaCorrenteScreen: {
        screen: ContaCorrenteScreen
    },    
    KidsGoalsScreen: {
        screen: KidsGoalsScreen
    },
    HelloKidScreen: {
        screen: HelloKidScreen
    },
    TabKidNavigation: {
        screen: TabKidNavigation
    },
},
{
    screenProps: isLogged,
    headerMode: 'none'
    // initialRouteName: isLogged ? 'TabNavigation' : 'LoginScreen',
});

const TabKidNavigation = createBottomTabNavigator({
    KidsGoalsScreen: {
        screen: KidsGoalsScreen,
        navigationOptions: {
            tabBarLabel: 'Minhas tarefas',
        }
    },
    MetasKidScreen: {
        screen: MetasKidScreen
    }
},
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'KidsGoalsScreen') {
                return <Image
                    style={{ width: 35, height: 35}} 
                    source={ focused ? 
                        require('../../assets/img/minhas_doacoes_color.png') : 
                        require('../../assets/img/minhas_doacoes.png') } />;
            } else if (routeName === 'MetasKidScreen') {
                return <Image
                    style={{ width: 35, height: 35}} 
                    source={ focused ? 
                        require('../../assets/img/metas_color.png') :
                        require('../../assets/img/metas.png') } />;
            } 
            // else if (routeName === 'Metas') {
            //     return <Image
            //         style={{ width: 35, height: 35}} 
            //         source={ focused ? 
            //             require('../../assets/img/metas_color.png') : 
            //             require('../../assets/img/metas.png')} />;
            // } else if (routeName === 'Chatbot') {
            //     return <Image
            //         style={{ width: 35, height: 35}} 
            //         source={ focused ? 
            //             require('../../assets/img/chatbot_color.png') :
            //             require('../../assets/img/chatbot.png') } />;
            // }
        }
    }),
    tabBarOptions: {
        activeTintColor: colors.cardText,
        inactiveTintColor: colors.cardText
    },
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
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'MeuPerfil') {
                return <Image
                    style={{ width: 35, height: 35}} 
                    source={ focused ? 
                        require('../../assets/img/profile_color.png') : 
                        require('../../assets/img/profile.png') } />;
            } else if (routeName === 'ContaCorrente') {
                return <Image
                    style={{ width: 35, height: 35}} 
                    source={ focused ? 
                        require('../../assets/img/conta_corrente_color.png') :
                        require('../../assets/img/conta_corrente.png') } />;
            } else if (routeName === 'Metas') {
                return <Image
                    style={{ width: 35, height: 35}} 
                    source={ focused ? 
                        require('../../assets/img/metas_color.png') : 
                        require('../../assets/img/metas.png')} />;
            } else if (routeName === 'Chatbot') {
                return <Image
                    style={{ width: 35, height: 35}} 
                    source={ focused ? 
                        require('../../assets/img/chatbot_color.png') :
                        require('../../assets/img/chatbot.png') } />;
            }
        }
    }),
    initialRouteName: 'ContaCorrente',
    tabBarOptions: {
        activeTintColor: colors.cardText,
        inactiveTintColor: colors.cardText
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
