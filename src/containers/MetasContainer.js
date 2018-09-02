import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';
import Metas from '../components/Metas';
import Card from '../components/Card';
import {connect} from "react-redux";
import * as GoalsActions from '../actions/GoalsActions';
import renderIf from 'render-if';

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
        const { _buscarMetasCurtoPrazo, _buscarMetasMedioPrazo, _buscarMetasLongoPrazo } = this.props;

        _buscarMetasCurtoPrazo(1)
            .then(resp => {
                this.setState({ curtoPrazo: resp })
            })

        _buscarMetasMedioPrazo(1)
            .then(resp => {
                this.setState({ medioPrazo: resp })
            })

        _buscarMetasLongoPrazo(1)
            .then(resp => {
                this.setState({ longoPrazo: resp })
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

                    {
                        renderIf(this.state.curtoPrazo.length)(
                            <Card>
                                <Text style={ styles.cardTitle }>Curto prazo</Text>

                                {
                                    this.state.curtoPrazo.map(item => {
                                        return (
                                            <Metas 
                                                nomeMeta={item.name}
                                                percentagem={item.percent}
                                            />
                                        )
                                    })
                                }
                            </Card>
                        )
                    }          

                    {
                        renderIf(this.state.medioPrazo.length)(
                        <Card>
                            <Text style={ styles.cardTitle }>Médio prazo</Text>
                            {
                                this.state.medioPrazo.map(item => {
                                    return (
                                        <Metas 
                                            nomeMeta={item.name}
                                            percentagem={item.percent}
                                        />
                                    )
                                })
                            }                            
                        </Card>
                        )
                    }          

                    {
                        renderIf(this.state.longoPrazo.length)(
                        <Card>
                            <Text style={ styles.cardTitle }>Longo prazo</Text>
                            {
                                this.state.longoPrazo.map(item => {
                                    return (
                                        <Metas 
                                            nomeMeta={item.name}
                                            percentagem={item.percent}
                                        />
                                    )
                                })
                            }                            
                        </Card>
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