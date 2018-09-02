import React from 'react';
import ChatbotContainer from "../containers/ChatbotContainer";

export default class ChatbotScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <ChatbotContainer navigation={this.props.navigation}/>
        );
    }
}
