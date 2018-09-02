import React from 'react';
import ModalTestContainer from "../containers/ModalTestContainer";

export default class ModalTestScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <ModalTestContainer navigation={this.props.navigation}/>
        );
    }
}
