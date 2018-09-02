import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';
import Card from '../components/Card';
import Gastos from '../components/Gastos';

export default class ContaCorrenteContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const topo = '../../assets/img/topo_azul.png';

        return (
            <ScrollView>
                <View style={ styles.container }>
                    <StatusBar backgroundColor={colors.blue} />

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

                    <Card>
                        <Text style={ styles.cardTitle }>
                            Gastos Fixos
                        </Text>
                        <Gastos 
                            gasto={'Aluguel'}
                            valor={'1500,00'}
                        />

                        <Gastos 
                            gasto={'Lux'}
                            valor={'105,00'}
                        />

                        <Gastos 
                            gasto={'Água'}
                            valor={'85,00'}
                        />

                    </Card>

                    <Card>
                        <Text style={ styles.cardTitle }>
                            Sazonais
                        </Text>
                        <Gastos 
                            gasto={'IPVA'}
                            valor={'250,00'}
                        />
                    </Card>

                    <Card>
                        <Text style={ styles.cardTitle }>
                            Crédito
                        </Text>
                        <Gastos 
                            gasto={'Amazon'}
                            valor={'150,00'}
                        />
                    </Card>
                    
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundBase
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