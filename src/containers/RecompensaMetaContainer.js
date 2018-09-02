import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';
import Button from '../components/Button';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

export default class RecompensaMetaContainer extends Component {
   
    render() {
        const simbol = '../../assets/img/pig_logo.png';
        const topo = '../../assets/img/forKids.png';
        const caminho = '../../assets/img/caminhoDoPorco.png';

        return (
            <View 
                style={ styles.container }>

                <StatusBar backgroundColor={colors.orange} />

                <Image 
                    style={{ width: 412, height: 174, position: 'absolute', top: 0 }}
                    source={ require(topo) }
                />  
                
                <Text style={ styles.title }>
                    Recompensas e Metas
                </Text>          

                <Image 
                    style={ styles.simbol }
                    source={ require(simbol) }
                />
                                 
                <View style={ styles.content }>
                    <Text style={ styles.suaMetaText }>
                        Seu saldo é: 
                    </Text>
                    <Text style={ styles.valorText }>
                        R$ 34
                    </Text>
                </View>

                <View style={ styles.metaView }>
                    <Text style={ styles.metaText }>Sua meta é:</Text>
                    <Text style={ styles.metaTextValor }>R$ 100</Text>
                </View>                                                

                <Image 
                    resizeMode={'center'}
                    style={ styles.imgCaminho }
                    source={ require(caminho) }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundBase
    },
    title:{
        fontFamily: fonts.circularStdBold,
        fontSize: 26,
        color: colors.white,
        marginLeft: 14,
        marginTop: 8
    },
    content: { 
        flexDirection: 'row', 
        alignSelf: 'flex-end', 
        marginRight: 30 
    },
    simbol: {
        height: 48,
        width: 48,
        marginTop: 17,
        marginLeft: 18
    },
    suaMetaText: {
        fontFamily: fonts.circularStdBook,
        fontSize: 18,
        color: colors.orange,
        marginTop: 10,
        marginRight: 5
    },
    valorText: {
        fontFamily: fonts.circularStdBold,
        fontSize: 32,
        color: colors.orange
    },
    metaView: {
        flexDirection: 'row',
        backgroundColor: colors.blue,
        alignSelf: 'center',
        width: 280,
        height: 52,
        borderRadius: 33,
        justifyContent: 'center',
        marginTop: 35   
    },
    metaText: {
        fontFamily: fonts.circularStdBook,
        fontSize: 13,
        color: colors.white,
        marginRight: 5,
        alignSelf: 'center'
    },
    metaTextValor: {
        fontFamily: fonts.circularStdBold,
        fontSize: 23,
        color: colors.white,
        alignSelf: 'center'
    },
    imgCaminho: {
        width: 320, 
        height: 320 
    }
});
