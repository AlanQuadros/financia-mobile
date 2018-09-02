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
    const pigSocial = '../../assets/img/pig_logo.png';

    return (
      <View style={ styles.container }>
        <StatusBar backgroundColor={colors.orange} />

        <Image
        style={ styles.ImgList }
        source={ require(pigSocial) }
        />

        <Text style={styles.textName}>
            Porquinho Social
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
        fontSize: 28,
        fontFamily: fonts.circularStdBold,
        color: colors.white,
        position:  'absolute',
        top: 30,
        left: 10
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