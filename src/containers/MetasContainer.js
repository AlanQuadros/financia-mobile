import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';
import Metas from '../components/Metas';
import Card from '../components/Card';
import {connect} from "react-redux";
import * as GoalsActions from '../actions/GoalsActions';

class MetasContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curtoPrazo: [],
            medioPrazo: [],
            longoPrazo: []
        };
    }

    componentDidMount() {
        const { _buscarMetasPorPrazo } = this.props;

        _buscarMetasPorPrazo(1, 1)
            .then(resp => {
                this.setState({ curtoPrazo: resp })
            })

        _buscarMetasPorPrazo(2, 1)
            .then(resp => {
                this.setState({ medioPrazo: resp })
            })

        _buscarMetasPorPrazo(3, 1)
            .then(resp => {
                this.setState({ lon: resp })
            })
    }

    render() {
        const topo = '../../assets/img/topo_azul.png';

        return (
            <ScrollView>
                <View style={ styles.container }>
                    <Image 
                        style={{ width: 412, height: 174, position: 'absolute' }}
                        source={ require(topo) }
                    />
                    <Text style={ styles.topText }>Metas</Text>

                    <Card>
                        <Text style={ styles.cardTitle }>Curto prazo</Text>

                        <Metas 
                            nomeMeta={'Máquina de Lavar'}
                            percentagem={50}
                        />

                        <Metas 
                            nomeMeta={'Televisão'}
                            percentagem={13}
                        />

                    </Card>

                    <Card>
                        <Text style={ styles.cardTitle }>Médio prazo</Text>

                        <Metas 
                            nomeMeta={'Reforma do Banheiro'}
                            percentagem={95}
                        />
                    </Card>

                    <Card>
                        <Text style={ styles.cardTitle }>Longo prazo</Text>

                        <Metas 
                            nomeMeta={'Ecosport'}
                            percentagem={15}
                        />

                        <Metas 
                            nomeMeta={'Viagem à Disney'}
                            percentagem={5}
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

const mapeador = (state) => ({
    getGoalsOne: state.GoalsReducer.getGoalsOne,
    getGoalsTwo: state.GoalsReducer.getGoalsTwo,
    getGoalsThree: state.GoalsReducer.getGoalsThree,
});

export default (MetasContainer = connect(mapeador, GoalsActions)(MetasContainer));