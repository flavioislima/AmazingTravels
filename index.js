import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './src/store/config'

const store = configureStore()

//Create a function that returns a component with the store linked
const RNRedux = () => {
    return (
    <Provider store={store}>
        <App />
    </Provider>
    )
}


AppRegistry.registerComponent('amazingtravels', () => RNRedux)
