import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar, ScrollView, Dimensions } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';
import {connect} from "react-redux";
import * as SpentsActions from '../actions/SpentsActions';
import Card from '../components/Card';
import Gastos from '../components/Gastos';
import renderIf from 'render-if';
import LottieView from 'lottie-react-native';
import Loader from '../components/Loader';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class ContaCorrenteContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fixos: [],
            sazonais: [],
            credito: [],
            loadingGF: true,
            loadingGS: true,
            loadingGC: true
        };
    }
    
    handleConta(conta) {
        this.setState({ conta });
    }

    handleSenha(senha){
        this.setState({ senha });
        
    }

    componentDidMount() {
        const { _buscarGastosFixos, _buscarGastosSazonais, _buscarGastosCredito } = this.props;

        _buscarGastosFixos(1)
            .then(resp => {
                this.setState({ fixos: resp, loadingGF: false })
            });

        _buscarGastosSazonais(1)
            .then(resp => {
                this.setState({ sazonais: resp, loadingGS: false })
            });

        _buscarGastosCredito(1)
            .then(resp => {
                this.setState({ credito: resp, loadingGC: false })
            });
    }

    render() {
        const topo = '../../assets/img/topo_azul.png';
        const fundo = '../../assets/img/fundo.png';

        return (
            <ScrollView>
                <View style={ styles.container }>                    

                    <StatusBar backgroundColor={colors.blue} />

                    {
                        renderIf(this.state.loadingGC && 
                            this.state.loadingGS &&
                            this.state.loadingGF)(
                                <Loader />
                            )
                    }

                    {
                        renderIf(!this.state.loadingGC && 
                            !this.state.loadingGS &&
                            !this.state.loadingGF)(
                                <View>
                                    <Image 
                                        style={{ width: 412, height: 174, position: 'absolute' }}
                                        source={ require(topo) }
                                    />
                                    <Text style={ styles.topText }> Conta Corrente </Text>

                                    <Card>
                                        <Gastos
                                            fontFamilyLeft={fonts.circularStdMedium}
                                            gasto={'Saldo Atual'}
                                            valor={'400,00'}
                                        />
                                    </Card>

                                    {
                                        renderIf(this.state.fixos.length)(
                                            <Card>
                                                <Text style={ styles.cardTitle }>
                                                    Gastos Fixos
                                                </Text>
                                                {
                                                    this.state.fixos.map(item => {
                                                        return (
                                                            <Gastos 
                                                                gasto={item.name}
                                                                valor={item.value}
                                                            />
                                                        );
                                                    })
                                                }
                                            </Card>
                                        )
                                    }
                                    {
                                        renderIf(this.state.sazonais.length)(
                                            <Card>
                                                <Text style={ styles.cardTitle }>
                                                    Sazonais
                                                </Text>
                                                {
                                                    this.state.sazonais.map(item => {
                                                        return (
                                                            <Gastos 
                                                                gasto={item.name}
                                                                valor={item.value}
                                                            />
                                                        );
                                                    })
                                                }
                                            </Card>
                                        )
                                    }
                                    {
                                        renderIf(this.state.credito.length)(
                                            <Card>
                                                <Text style={ styles.cardTitle }>
                                                    Crédito
                                                </Text>
                                                {
                                                    this.state.credito.map(item => {
                                                        return (
                                                            <Gastos 
                                                                gasto={item.name}
                                                                valor={item.value}
                                                            />
                                                        );
                                                    })
                                                }
                                            </Card>
                                        )
                                    }
                                </View>
                            )
                    }                    
                    
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    topText: {
        fontSize: 24,
        fontFamily: fonts.circularStdBold,
        color: colors.white,
        marginTop: 21,
        marginLeft: 14,
        marginBottom: 6
    },
    cardTitle: {
        fontFamily: fonts.circularStdMedium,
        fontSize: 22,
        color: colors.black,
        marginBottom: 16
    }
})

const mapeador = (state) => ({
    getSpentsOne: state.GoalsReducer.getSpentsOne,
    getSpentsTwo: state.GoalsReducer.getSpentsTwo,
    getSpentsThree: state.GoalsReducer.getSpentsThree,
});

export default (ContaCorrenteContainer = connect(mapeador, SpentsActions)(ContaCorrenteContainer));
