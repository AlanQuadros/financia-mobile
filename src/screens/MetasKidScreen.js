import React from 'react';
import MetasKidContainer from "../containers/MetasKidContainer";

export default class MetasKidScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <MetasKidContainer navigation={this.props.navigation}/>
        );
    }
}
