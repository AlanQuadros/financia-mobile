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

        <ImageBackground
            style={ styles.PigImg }
            source={ require(pigSocial) }
            >
            <Text style={ styles.valor }>
                R$ 120
            </Text>
        </ImageBackground>        

        <View>
            <Text style={ styles.textI }>
                Continue sendo uma pessoa  
            </Text>
            <Text style={ styles.textII }>
                do bem e carinhosa.
            </Text>
        </View>

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
        fontSize: 30,
        fontFamily: fonts.circularStdBold,
        color: colors.blue,
        marginTop: 50,
    },
    text: {
        fontSize: 27,
        fontFamily: fonts.circularStdBook,
        color: colors.blue
    },
    valor: {
        fontSize: 22,
        fontFamily: fonts.circularStdBold,
        color: colors.white,        
        alignSelf: 'center',
        marginTop: 35
    },
    textI: {
        fontSize: 20,
        fontFamily: fonts.circularStdBook,
        color: colors.grey,
        marginTop: 27
    },
    textII: {
        fontSize: 20,
        fontFamily: fonts.circularStdBold,
        color: colors.grey
    },
    PigImg: {
        width: 149,
        height: 148,
        marginTop: 33,
        justifyContent: 'center',
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
        height: 180, 
        position: 'absolute',
        top: -10,

    },
    ImgList: { 
        width: 55,
        height: 57,
        position: 'absolute',
        top: 60,
        left: 8
    },

    listItemContent: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }

});