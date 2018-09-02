import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

const width = Dimensions.get("window").width;

export default class CardUser extends Component {
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
        alignSelf: 'flex-end',
        marginRight: 14,
        marginBottom: 11,
        maxWidth: width-80,
        paddingTop: 12,
        paddingHorizontal: 20,
        paddingBottom: 8,
        backgroundColor: colors.blue,
        borderRadius: 20
    },
    textStyle: {
        color: colors.white,
        fontFamily: fonts.circularStdBook,
        fontSize: 16
    }
});