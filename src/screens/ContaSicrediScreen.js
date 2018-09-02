import React from 'react';
import ContaSicrediContainer from "../containers/ContaSicrediContainer";

export default class ContaSicrediScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <ContaSicrediContainer navigation={this.props.navigation}/>
        );
    }
}