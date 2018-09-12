import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} resizeMode="cover" style={styles.placeImage} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 3,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    placeImage: {
        marginRight: 8,
        width: 30,
        height: 30
    }
})

export default ListItem