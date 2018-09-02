import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native';
import Button from '../components/Button';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const logo = '../../assets/img/logo.png';
        const fundo = '../../assets/img/fundo.png';

        return (
            <ImageBackground 
                source={ require(fundo) }
                style={ styles.container }>

                <StatusBar hidden />

                <Image 
                    style={{ width: 238, height: 70 }}
                    source={ require(logo) }
                />

                <View style={ styles.buttonsView }>
                    <Button 
                        label={'Conta Sicredi'}
                        width={252}
                        backgroundColor={colors.softBlue}
                        textColor={colors.white}
                        fontFamily={fonts.quicksandBold}
                        fontSize={25}
                    />

                    <Button 
                        action={
                            () => this.props.navigation.navigate('NewAccountScreen')
                        }
                        style={{ marginTop: 8 }}
                        label={'Novo usuário'}
                        width={252}
                        backgroundColor={colors.softBlue}
                        textColor={colors.white}
                        fontFamily={fonts.quicksandBold}
                        fontSize={25}
                    />
                </View>
                
            </ImageBackground>
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
    },
    buttonsView: {
        marginTop: 177
    }
});
