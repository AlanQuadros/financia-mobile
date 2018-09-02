import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

const width = Dimensions.get("window").width;

export default class CardFinan extends Component {
    static defaultProps = {
        text: ''
    }

    render() {
        return (
        <View style={ styles.container }>
            <Text style={ styles.textStyle }>
                { this.props.text }
            </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'flex-start',        
        marginLeft: 12,
        marginBottom: 11,
        maxWidth: width-80,
        paddingTop: 12,
        paddingHorizontal: 20,
        paddingBottom: 8,
        backgroundColor: colors.white,
        borderRadius: 20
    },
    textStyle: {
        color: colors.cardText,
        fontFamily: fonts.circularStdBook,
        fontSize: 16
    }
});