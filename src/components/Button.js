import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {colors} from "../resources/Colors";
import { fonts } from '../resources/Fonts';

export default class Button extends React.PureComponent {
    static defaultProps = {
        width: 100,
        fontSize: 25,
        label: 'Button',
        backgroundColor: 'transparent',
        textColor: colors.pink,
        hasUnderline: false,
        fontFamily: fonts.quicksandBold
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
                
                <Text style={[ 
                    styles.buttonText, 
                    { 
                        color: this.props.textColor,
                        textDecorationLine: this.props.hasUnderline ? 'underline' : 'none',
                        fontSize: this.props.fontSize,
                        fontFamily: this.props.fontFamily
                    } 
                ]}>
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
        height: 52,
        borderRadius: 33,
        alignSelf: 'center'
    },
    buttonText: {                
        backgroundColor: 'transparent'        
    }
});
