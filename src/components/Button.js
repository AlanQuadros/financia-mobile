import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {colors} from "../resources/Colors";

export default class Button extends React.PureComponent {
    static defaultProps = {
        width: 100,
        label: 'Button',
        backgroundColor: 'transparent'
    };


    render() {
        return (
            <TouchableOpacity
                onPress={ this.props.action }
                style={[ 
                    styles.buttonView, 
                    {
                        width: this.props.width, 
                        backgroundColor: this.props.backgroundColor
                    }, 
                    this.props.style ]}>
                
                <Text style={ styles.buttonText }>
                    { this.props.label }
                </Text>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        borderWidth: 2,
        borderColor: colors.black,
        alignSelf: 'center'
    },
    buttonText: {
        color: colors.black,
        fontSize: 16,
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    }
});
