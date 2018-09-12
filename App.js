import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ListPlaces from './src/components/ListPlaces/ListPlaces'
import Input from './src/components/Input/Input'
import placeImage from './src/assets/img/beautiful-place.jpg'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  }


  submitPlaceHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.floor(Math.random() * 10000).toString(),
          name: placeName,
          image: placeImage
        })
      }
    })
  }

  selectedPlaceHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  }

  deletePlaceHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    })
  }

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.deletePlaceHandler}
          onModalClose={this.modalCloseHandler}
        />
        <Input
          submitHandler={this.submitPlaceHandler}
        />
        <Text style={styles.placesText}>Places</Text>
        <ListPlaces
          places={this.state.places}
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
