import React from 'react';
import ContaCorrenteContainer from "../containers/ContaCorrenteContainer";

export default class ContaCorrenteScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <ContaCorrenteContainer navigation={this.props.navigation}/>
        );
    }
}
