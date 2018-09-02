import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardFinan from '../components/CardFinan';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';
import { SicrediUserText1, SicrediUserText2, SicrediUserText3, SicrediUserText4 } from '../resources/Constants';
import CardInput from '../components/CardInput';
import CardUser  from '../components/CardUser';
 
export default class ContaSicrediContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conta: '',
            senha: ''
        };
    }
    handleConta(conta) {
        this.setState({ conta });
    }
     handleSenha(senha){
            this.setState({ senha });
          }
     render() {
        const topo = '../../assets/img/topo_azul.png';
         return (
            <View style={ styles.container }>
                 <Image 
                    style={{ width: 412, height: 174, position: 'absolute' }}
                    source={ require(topo) }
                ></Image>
                <Text style={ styles.topText }>
                    Conta Sicredi
                </Text>
                 <CardFinan text={SicrediUserText1} />
                <CardFinan text={SicrediUserText2} />
                <CardInput 
                    autoCapitalize
                    value={this.state.conta}
                    maxLength={30}
                    onChangeText={value => this.handleConta(value)}
                    width={89}
                />
                <CardFinan text={SicrediUserText3} />
                <CardInput 
                    autoCapitalize
                    value={this.state.senha}
                    maxLength={6}
                    onChangeText={value => this.handleSenha(value)}
                    width={89}
                    secureTextEntry
                />
                <CardFinan text={SicrediUserText4} />
                 <CardUser text={'Legal!'} />
                 </View>
        );
  }}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundBase
    },
    topText: {
        fontSize: 24,
        fontFamily: fonts.circularStdBold,
        color: colors.white,
        marginTop: 16,
        marginLeft: 28,
        marginBottom: 29
    }
});

