import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
import Button from '../components/Button';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';

const width = Dimensions.get("window").width;

export default class HelloKidContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        kidName: 'Aninha'
    };
  }

  render() {
    const fill1 = '../../assets/img/fill_1.png';
    const group3 = '../../assets/img/group_3.png';
    const logoKids = '../../assets/img/logo_kids.png';
    const pigLogo = '../../assets/img/pig_logo.png';

    return (
      <View style={ styles.container }>
        <StatusBar hidden />

        <Image
            style={ styles.topImage }
            source={ require(fill1) }
        />

        <Image
            style={ styles.logoKids }
            source={ require(logoKids) }
        />
        
        <Image
            style={ styles.pigLogo }
            source={ require(pigLogo) }
        />

        <Text style={ styles.textName }> 
            Olá { this.state.kidName },
        </Text>
        <Text style={[ styles.textName, { fontFamily: fonts.quicksandLight } ]}>
            Pronto(a) para brincar?
        </Text>

        <Button
            style={ styles.yesNoButton } 
            label={'Sim!'}
            backgroundColor={colors.blue}
            width={280}
            textColor={colors.white}
        />

        <Image 
            style={ styles.footerImage }
            source={ require(group3) }
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
        fontFamily: fonts.quicksandBold,
        color: colors.pink
    },
    yesNoButton: {
        marginTop: 47,
    },
    topImage: { 
        width: 290, 
        height: 164, 
        position: 'absolute', 
        top: 0, 
        left: 0 
    },
    logoKids: { 
        width: 150, 
        height: 62, 
        position: 'absolute', 
        top: 65, 
        right: 27 
    },
    pigLogo: { 
        width: 107, 
        height: 105, 
        alignSelf: 'center', 
        marginTop: 48, 
        marginBottom: 32 
    },
    footerImage: { 
        width: width, 
        height: 243, 
        position: 'absolute', 
        bottom: -100, 
        right: 0 
    }
});