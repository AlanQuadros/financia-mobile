import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CardFinan from '../components/CardFinan';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';
import { SicrediUserText1, SicrediUserText2, SicrediUserText3, SicrediUserText4 } from '../resources/Constants';
import CardInput from '../components/CardInput';
import CardUser  from '../components/CardUser';
import renderIf from 'render-if';
import { StackActions, NavigationActions } from 'react-navigation';
 
export default class ContaSicrediContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conta: '',
            senha: '',
            showPassword: false,
            showFinish: false
        };
    }

    handleConta(conta) {
        this.setState({ conta });
    }

     handleSenha(senha){
        this.setState({ senha });             
    }

    handleSubmitConta() {
        this.setState({ showPassword: true })
    }

    handleSubmitSenha() {
        this.setState({ showFinish: true })

        setTimeout(() => {
            const { navigate } = this.props.navigation
            const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'TabNavigation' })
            ],
            key: null
            });
            this.props.navigation.dispatch(resetAction);
        }, 3000);   
    }

     render() {
        const topo = '../../assets/img/topo_azul.png';
         return (
            <View style={ styles.container }>
                 <Image 
                    style={{ width: 412, height: 174, position: 'absolute' }}
                    source={ require(topo) }
                />

                <Text style={ styles.topText }>
                    Conta Sicredi
                </Text>

                <CardFinan text={SicrediUserText1} />

                <CardFinan text={SicrediUserText2} />
                
                <CardInput
                    autoCapitalize
                    value={this.state.conta}
                    maxLength={30}
                    onSubmitEditing={ this.handleSubmitConta.bind(this) }
                    onChangeText={value => this.handleConta(value)}
                    width={89}
                />

                {
                    renderIf(this.state.showPassword) (
                        <View>
                            <CardFinan text={SicrediUserText3} />
                        
                            <CardInput 
                                autoCapitalize
                                value={this.state.senha}
                                maxLength={6}
                                onSubmitEditing={ this.handleSubmitSenha.bind(this) }
                                onChangeText={value => this.handleSenha(value)}
                                width={89}
                                secureTextEntry
                            />

                            {
                                renderIf(this.state.showFinish) (
                                    <View>
                                        <CardFinan text={SicrediUserText4} />
                                        <CardUser text={'Legal!'} />
                                    </View>
                                )
                            }
                    
                        </View>
                    )
                }                
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

