import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

const width = Dimensions.get("window").width;

export default class CardInput extends Component {

    static defaultProps = {
        width: 100,
        maxLength: 255,
        autoCapitalize: false
    }

    render() {
        return (
        <View style={ styles.container }>
            <TextInput                
                autoCapitalize={this.props.autoCapitalize ? 'words' : 'none'}
                textAlign={'center'}            
                selectionColor={colors.white}
                underlineColorAndroid={'transparent'}
                value={this.props.value}
                maxLength={this.props.maxLength}
                onChangeText={e => this.props.onChangeText(e)}
                onSubmitEditing={this.props.onSubmitEditing}
                style={[ styles.textStyle, { width: this.props.width } ]}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 14,
        marginBottom: 11,
        maxWidth: width-80,
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: colors.blue,
        borderRadius: 20
    },
    textStyle: {
        color: colors.white,
        fontFamily: fonts.circularStdBook,
        fontSize: 18
    }
});