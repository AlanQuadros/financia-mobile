import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const logo = '../../assets/img/logo.png';
        const logoSize = 100;

        return (
            <View style={ styles.container }>
                <Image 
                    style={{ width: logoSize, height: logoSize }}
                    source={ require(logo) }
                />

                <Text style={ styles.title }> FinanCia </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    title:{
        fontSize: 22,
        color: 'red',
        fontWeight: 'bold'
    }
});
