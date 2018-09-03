import React from 'react';
import RecompensaMetaContainer from "../containers/RecompensaMetaContainer";

export default class RecompensaMetaScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <RecompensaMetaContainer navigation={this.props.navigation}/>
        );
    }
}
