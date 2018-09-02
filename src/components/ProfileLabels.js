import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';

export default class ProfileLabels extends Component {
    
    

    render() {
        return (
            <View style={ styles.view }>
                <Text style={ styles.label }> { this.props.label } </Text>
                <Text style={ styles.value }> { this.props.value } </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',        
        marginVertical: 11
    },
    label: {
        fontFamily: fonts.circularStdBook,
        fontSize: 15,
        color: colors.cardText
    },
    value: {
        fontFamily: fonts.circularStdBold,
        fontSize: 15,
        color: colors.cardText
    }
});