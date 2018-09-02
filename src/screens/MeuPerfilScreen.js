import React from 'react';
import MeuPerfilContainer from "../containers/MeuPerfilContainer";

export default class MeuPerfilScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <MeuPerfilContainer navigation={this.props.navigation}/>
        );
    }
}
