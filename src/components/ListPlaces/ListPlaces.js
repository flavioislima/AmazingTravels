import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import ListItem from './ListItem/ListItem'

const ListPlaces = (props) => {
    return (
        <FlatList
            style={styles.list}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemPressed(info.item.key)}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
})

export default ListPlaces