import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import ListPlaces from './src/components/ListPlaces/ListPlaces'
import Input from './src/components/Input/Input'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, selectPlace, deletePlace, deselectPlace } from './src/store/actions'

class App extends React.Component {
  submitPlaceHandler = (placeName) => {
    this.props.onAddPlace(placeName)
  }

  selectedPlaceHandler = key => {
    this.props.onSelectPlace(key)
  }

  deletePlaceHandler = () => {
    this.props.onDeletePlace()
  }

  modalCloseHandler = () => {
    this.props.onDeselectPlace()
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.deletePlaceHandler}
          onModalClose={this.modalCloseHandler}
        />
        <Input
          submitHandler={this.submitPlaceHandler}
        />
        <Text style={styles.placesText}>Places</Text>
        <ListPlaces
          places={this.props.places}
          onItemPressed={this.selectedPlaceHandler}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  placesText: {
    fontSize: 18,
    fontWeight: 'bold'
  }


})

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeletePlace: () => dispatch(deletePlace()),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App) 