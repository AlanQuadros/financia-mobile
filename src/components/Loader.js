import React, { Component } from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Loader extends Component {
   
    render() {
        const fundo = '../../assets/img/fundo.png';

        return (
            <ImageBackground
                source={ require(fundo) } 
                style={{
                    alignItems: 'center',
                }}>
                <View style={{ width: width, height: height }}>
                    <LottieView
                        style={{                            
                            backgroundColor: 'transparent',
                            width: width, height: height                             
                        }}
                        autoPlay
                        resizeMode='cover'
                        source={ require('../../assets/animations/loader.json') }
                        ref={animation => {
                            this.animation = animation;
                        }}
                    />
                </View>
                
            </ImageBackground>
        );
    }
}
