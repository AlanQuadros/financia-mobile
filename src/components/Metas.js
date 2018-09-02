import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../resources/Fonts';
import { colors } from '../resources/Colors';
import * as Progress from 'react-native-progress';

const width = Dimensions.get("window").width;

export default class Metas extends Component {
    
    static defaultProps = {
        fontFamilyLeft: fonts.circularStdBook
    }

    render() {
        return (
        <View style={ styles.container }>
            <View style={{ width: width/2 }}>
                <Text
                    numberOfLines={3}
                    style={[ styles.leftText, { fontFamily: this.props.fontFamilyLeft } ]}>
                    { this.props.nomeMeta }
                </Text>
            </View>
            
            <View style={{ width: width/2 }}>
                <Progress.Bar 
                    style={{ margin: 10 }}
                    width={145}
                    color={colors.white}
                    borderColor={colors.blue}
                    borderWidth={3}
                    borderRadius={6}
                    unfilledColor={colors.blue}
                    progress={this.props.percentagem/100}
                    width={100} 
                />
            </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    leftText: {        
        fontSize: 20,
        paddingRight: 5,
        color: colors.cardText
    },
    rightText: {
        fontFamily: fonts.circularStdMedium,
        fontSize: 20,        
        color: colors.softBlue
    }
});