import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardFinan from '../components/CardFinan';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';
import { newUserText1, newUserText2, newUserText3, newUserText4 } from '../resources/Constants';
import CardUser from '../components/CardUser';

export default class NewAccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={ styles.container }>
                
                <Text style={ styles.topText }>
                    Conta Sicredi
                </Text>

                <CardFinan text={newUserText1} />
                <CardFinan text={newUserText2} />
                <CardUser text={'Legal!'} />
                <CardFinan text={newUserText3} />
                <CardUser text={'                   '} />
                <CardFinan text={newUserText4} />
                <CardUser text={'                   '} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundBase
    },
    topText: {
        fontSize: 24,
        fontFamily: fonts.circularStdBold,
        color: colors.black,
        marginTop: 16,
        marginLeft: 28,
        marginBottom: 8
    }
})