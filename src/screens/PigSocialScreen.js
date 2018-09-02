import React from 'react';
import PigSocialContainer from "../containers/PigSocialContainer";

export default class PigSocialScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <PigSocialContainer navigation={this.props.navigation}/>
        );
    }
}