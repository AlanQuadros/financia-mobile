import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, Dimensions, List, FlatList } from 'react-native';
import Button from '../components/Button';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';


const width = Dimensions.get("window").width;

export default class PigSocialContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }

  render() {
    const forKids = '../../assets/img/forKids.png';
    const pigSocial = '../../assets/img/pig_logo.png';
    const doa = '../../assets/img/minhas_doacoes.png';

    return (
      <View style={ styles.container }>
        <StatusBar backgroundColor={colors.orange} />

        <Image
        style={ styles.topImage }
        source={ require(forKids) }
        />

        <Image
        style={ styles.ImgList }
        source={ require(doa) }
        />

        <Text style={styles.textTitulo}>
            Porquinho Social
        </Text>

         <Text style={ styles.textName }> 
            Que legal Aninha,
        </Text>
        <Text style={[ styles.text]}>
            Veja o quanto 
        </Text>
        <Text style={[ styles.text]}>
            você já ajudou!
        </Text>

        <Image
        style={ styles.PigImg }
        source={ require(pigSocial) }
        />

        <Text style={[ styles.valor]}>
           R 120,00
        </Text>

        <Text style={[ styles.textI]}>
            Continue sendo uma pessoa  
        </Text>
        <Text style={[ styles.textI]}>
             bondosa!!
        </Text>

        <Image
            style={ styles.footerImage }
        />
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
    textName: {
        fontSize: 38,
        fontFamily: fonts.circularStdBold,
        color: colors.blue,
        top:54
    },
    text: {
        fontSize: 30,
        fontFamily: fonts.circularStdBold,
        color: colors.blue,
        top:50
    },
    valor: {
        fontSize: 22,
        fontFamily: fonts.circularStdBold,
        color: colors.white,
        top: 12,
        right:8

    },
    textI: {
        fontSize: 22,
        fontFamily: fonts.circularStdBold,
        color: colors.grey,
        top: 110,
        right:8
        
    },
    PigImg: {
        top: 80

    },
    textTitulo: {
        fontSize: 23,
        fontFamily: fonts.circularStdBold,
        color: colors.white,
        position:  'absolute',
        top: 30,
        left: 10
    },
    topImage: { 
        width: 412, 
        height: 200, 
        position: 'absolute',
        top:0,
        left: 0,
        right: 0

    },
    ImgList: { 
        width: 55,
        height: 57,
        right: 25,
        position: 'absolute',
        top: 77,
        left: 10
    },

    listItemContent: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }

});