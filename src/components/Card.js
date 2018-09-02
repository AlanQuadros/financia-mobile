import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../resources/Colors';

export default class Card extends Component {    

    render() {
        return (
            <View style={ styles.container }>
                { this.props.children }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 11,
        marginHorizontal: 12,
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        borderRadius: 20
    }
});
