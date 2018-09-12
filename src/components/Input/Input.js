import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'


class input extends Component {
    state = {
        placeName: ''
    }

    placeNameHandler = placeName => {
        this.setState({ placeName })
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') return

        this.props.submitHandler(this.state.placeName)
        this.setState({ placeName: '' })
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    onChangeText={this.placeNameHandler}
                    value={this.state.placeName}
                    placeholder='Add a new Place'
                />
                <Button title="Add"
                    style={styles.button}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        width: '70%'
    },
    button: {
        width: '30%'
    },
})

export default input