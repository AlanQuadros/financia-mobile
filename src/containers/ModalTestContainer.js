import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import  Modal from "react-native-modal";
import renderIf from 'render-if';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';

export default class ModalTestContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false
    };
  }

  toggleModal = () => {
    this.setState({ visibleModal: !this.state.visibleModal })
  }


  render() {
    const logo = '../../assets/img/pig_logo.png';
    return (
      <View style={styles.container}>

        <Modal style={styles.container}
            isVisible={this.state.visibleModal}
            onBackdropPress={this.toggleModal}
          >
          <View style={styles.modalContent}>
            <Image source= { require(logo) } style={styles.image}></Image>
            <Text style={styles.congratulations}>Parabéns!</Text>
            <Text style={styles.meta}>Você cumpriu todas as tarefas e pode trocar pelo prêmio!!!</Text>          
          </View>
        </Modal>
      
        <TouchableOpacity onPress={this.toggleModal}>
          <View style={styles.button}>
            <Text>VAI</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white", 
    alignItems: "center",
    padding: 22,
    borderRadius: 40,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 286,
    width: 314
  },
  congratulations: {
    color: colors.softBlue,
    fontFamily: fonts.circularStdBold,
    fontSize: 40
  },
  image:{
    width: 107,
    height: 105,
    margin: 16
  },
  meta:{
    color: colors.grey,
    fontFamily: fonts.circularStdBook,
    fontSize: 15,
    textAlign: "center",
    alignItems: "center"
  }
});