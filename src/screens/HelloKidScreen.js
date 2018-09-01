import React from 'react';
import HelloKidContainer from "../containers/HelloKidContainer";

export default class HelloKidScreen extends React.PureComponent {
    static navigationOptions = () => {
        return {
            header: null
        }
    };

    render() {
        return (
            <HelloKidContainer navigation={this.props.navigation}/>
        );
    }
}
