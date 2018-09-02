import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native';
import Button from '../components/Button';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

export default class LoginContainer extends Component {
   
    render() {
        const logo = '../../assets/img/logo.png';
        const topo = '../../assets/img/topo_azul.png';

        return (
            <View 
                style={ styles.container }>

                <StatusBar backgroundColor={colors.blue} />
                
                <Image 
                    style={{ width: 412, height: 174, position: 'absolute', top: 0 }}
                    source={ require(topo) }
                />    

                <View style={ styles.buttonsView }>
                    <Image 
                        style={ styles.logo }
                        source={ require(logo) }
                    />

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
    },
    buttonsView: {
        justifyContent: 'center'
    },
    logo: { 
        width: 238, 
        height: 70, 
        alignSelf: 'center',
        marginBottom: 85
    }
});
