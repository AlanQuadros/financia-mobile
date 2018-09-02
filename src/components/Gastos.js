import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';

export default class Gastos extends Component {
    
    static defaultProps = {
        fontFamilyLeft: fonts.circularStdBook
    }

    render() {
        return (
        <View style={ styles.container }>
            <Text style={[ styles.leftText, { fontFamily: this.props.fontFamilyLeft } ]}>
                { this.props.gasto }
            </Text>
            <Text style={ styles.rightText }>
                R$ { this.props.valor }
            </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    leftText: {        
        fontSize: 22,
        color: colors.cardText
    },
    rightText: {
        fontFamily: fonts.circularStdMedium,
        fontSize: 22,
        color: colors.softBlue
    }
});