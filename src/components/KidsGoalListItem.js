import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

const width = Dimensions.get("window").width;

export default class KidsGoalListItem extends Component {
    render() {
        const listItemBackground = '../../assets/img/task_list_background.png';
        return (
            <View style={ styles.container }>
                <Text style={ styles.textStyle }>{this.props.key}</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: colors.cardText,
        fontFamily: fonts.circularStdBook,
        fontSize: 18
    }
});