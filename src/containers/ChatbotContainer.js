import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';

export default class ChatbotContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const topo = '../../assets/img/topo_azul.png';

        return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={colors.blue} />
            <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                <Image 
                    style={{ width: 412, height: 174, position: 'absolute', top: 0, left: 0 }}
                    source={ require(topo) }
                />
                <Text style={{
                    fontSize: 24,
                    fontFamily: fonts.circularStdBold,
                    color: colors.white,
                    marginTop: 21,
                    marginLeft: 14,
                    marginBottom: 6,
                    position: 'absolute',
                    top: 0
                }}>
                    Chatbot
                </Text>

                <Text style={{
                    fontFamily: fonts.circularStdBold,
                    fontSize: 25,
                    textAlign: 'center',                
                    color: colors.black,                    
                }}> 
                    Em Breve ;) 
                </Text>
            </View>
        </View>
        );
    }
}
