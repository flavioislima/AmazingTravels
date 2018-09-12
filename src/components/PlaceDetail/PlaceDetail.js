import React from 'react'
import { Modal, View, Button, Text, Image, StyleSheet } from 'react-native'

const PlaceDetail = (props) => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image style={styles.placeImage} source={props.selectedPlace.image} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }

    return (
        <Modal
            visible={props.selectedPlace !== null}
            animationType="fade"
            onRequestClose={props.onModalClose}
        >
            <View style={styles.modalContent}>
                {modalContent}
                <View style={styles.buttons}>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                    <Button title="Close" onPress={props.onModalClose} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        margin: 22
    },
    placeName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    buttons: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default PlaceDetail