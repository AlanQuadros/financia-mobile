import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../resources/Colors';
import { fonts } from '../resources/Fonts';
import ProfileLabels from '../components/ProfileLabels';
import Button from '../components/Button';
import Modal from "react-native-modal";

export default class MeuPerfilContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Pedro Cilada",
                email: "pedro.cilada@gmail.com",
                phone: "51999999999",
                age: 47,
                city: "Porto Alegre",
                uf: "RS",
                url_img: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg",
                notification_id: "stringao"
            },
            kid: [
                {
                "id": 1,
                "kid_id": 1,
                "adult_id": 1,
                "created_at": "2018-09-02T13:45:59.000Z",
                "updated_at": "2018-09-02T13:45:59.000Z"
                }
            ],
            showModal: false
        };
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    render() {
        const topo = '../../assets/img/topo_azul.png';
        const { user } = this.state;

        return (
            <ScrollView>

                <Modal
                    onBackdropPress={ this.toggleModal } 
                    isVisible={this.state.showModal}>
                    <View style={{ flex: 1 }}>
                        <Text>Trocar Perfil</Text>
                    </View>
                </Modal>

                <View style={ styles.container }>
                    <Image 
                        style={{ width: 412, height: 174, position: 'absolute' }}
                        source={ require(topo) }
                    />
                    <Text style={ styles.topText }>Meu Perfil</Text>

                    <View style={ styles.viewUser }>
                        <Image 
                            style={{ width: 190, height: 190, marginBottom: 4 }}
                            borderRadius={95}
                            source={{ uri: user.url_img }}
                        />

                        <ProfileLabels
                            label={'Nome'}
                            value={user.name}
                        />

                        <ProfileLabels
                            label={'Senha'}
                            value={'•••••••'}
                        />

                        <ProfileLabels
                            label={'E-mail'}
                            value={user.email}
                        />

                        <ProfileLabels
                            label={'Idade'}
                            value={user.age}
                        />

                        <ProfileLabels
                            label={'Cidade'}
                            value={`${user.city} - ${user.uf}`}
                        />

                    </View>

                    <View style={{                    
                        marginHorizontal: 5,
                        marginBottom: 25
                    }}>                        

                        <Button
                            action={ this.toggleModal }
                            style={{ marginBottom: 11 }}
                            width={171}
                            label={'Trocar Perfil'}
                            backgroundColor={colors.orange}
                            textColor={colors.white}
                        />

                        <Button
                            width={171}
                            label={'Logout'}
                            backgroundColor={colors.grey}
                            textColor={colors.white}
                        />

                    </View>

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
    viewUser: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 50
    },
    topText: {
        fontSize: 24,
        fontFamily: fonts.circularStdBold,
        color: colors.white,
        marginTop: 21,
        marginLeft: 14,
        marginBottom: 6
    }
})