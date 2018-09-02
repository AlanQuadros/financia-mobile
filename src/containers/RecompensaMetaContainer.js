import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native';
import Button from '../components/Button';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

export default class RecompensaMetaContainer extends Component {
   
    render() {
        const simbol = '../../assets/img/pig_logo.png';
        const topo = '../../assets/img/fill_1.png';
        //const meta
        //const caminho

        return (
            <View 
                style={ styles.container }>
                
                <Image 
                    style={{ width: 412, height: 174, position: 'absolute', top: 0 }}
                    source={ require(topo) }
                />    
                <Image 
                    style={ styles.simbol }
                    source={ require(simbol) }
                />
            
                <View class="row">
                    <Text>Seu saldo é:</Text>
                    <Text>R$ 34</Text>
                </View>
                <View style={styles.modalContent}>
                    <Text>Sua meta é R$ 100</Text>
                </View>
                <View style={styles.modalContent}>
                        
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
    }, 
    modalContent: {
    backgroundColor: colors.softBlue, 
    alignItems: "center",
    padding: 22,
    borderRadius: 33.5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 52,
    width: 280
  }
});
