import React from 'react';
import MetasContainer from "../containers/MetasContainer";

export default class MetasScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <MetasContainer navigation={this.props.navigation}/>
        );
    }
}
