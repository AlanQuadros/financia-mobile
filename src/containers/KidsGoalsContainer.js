import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
import Button from '../components/Button';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';

const width = Dimensions.get("window").width;

export default class KidsGoalsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }

  render() {
    const forKids = '../../assets/img/forKids.png';
    const list = '../../assets/img/list.png';

    return (
      <View style={ styles.container }>
        <StatusBar backgroundColor={colors.orange} />

        <Image
            style={ styles.topImage }
            source={ require(forKids) }
        />
        <Image
        style={ styles.ImgList }
        source={ require(list) }
        />

        <Text style={styles.textName}>
            Minhas Tarefas
        </Text>

        <Text style={styles.textInf}>
            As tarefas não selecionadas
        </Text> 
        <Text style={styles.textInf2}>   
            permanecem após o envio.
        </Text>

        <Button
            style={ styles.enviarButton } 
            label={'Enviar tarefa!'}
            backgroundColor={colors.blue}
            width={280}
            textColor={colors.white}
        />

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
    textInf: {
        fontSize: 18,
        fontFamily: fonts.circularStdBook,
        color: colors.orange,
        position:  'absolute',
        top: 130,
        right: 20
    },
    textInf2: {
        fontSize: 18,
        fontFamily: fonts.circularStdBook,
        color: colors.orange,
        position:  'absolute',
        top: 150,
        right: 25
    },
    enviarButton: {
        position: 'absolute',
        top: 550
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

});