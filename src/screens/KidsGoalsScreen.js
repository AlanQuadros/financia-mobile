import React from 'react';
import KidsGoalsContainer from "../containers/KidsGoalsContainer";

export default class KidsGoalsScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <KidsGoalsContainer navigation={this.props.navigation}/>
        );
    }
}