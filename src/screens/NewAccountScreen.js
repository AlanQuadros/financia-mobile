import React from 'react';
import NewAccountContainer from "../containers/NewAccountContainer";

export default class NewAccountScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <NewAccountContainer navigation={this.props.navigation}/>
        );
    }
}
