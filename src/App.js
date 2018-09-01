import React, {Component} from 'react';
import { Provider } from 'react-redux';
import createMainStore from './reducers/Store';
import Navigation from './navigation/Navigation';
import { AsyncStorage } from "react-native";

const store = createMainStore();

export default class App extends Component {
    async componentWillMount() {
        try {
            const logado = await AsyncStorage.getItem('LOGGED');
            if (logado === 'true') {
                store.dispatch({
                    type: "USER_LOGGED",
                });
            }
        }
        catch (e) {
            alert('Error\n' + e);
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>

        );
    }
}