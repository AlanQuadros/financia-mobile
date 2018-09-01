import React from 'react';
import LoginContainer from "../containers/LoginContainer";

export default class LoginScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <LoginContainer navigation={this.props.navigation}/>
        );
    }
}
