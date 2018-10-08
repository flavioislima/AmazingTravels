import { createStore, combineReducers, compose } from 'redux'

import reducer from './reducers/root'

const rootReducer = combineReducers({
    places: reducer
})

let composeEnhancer = compose

if (__DEV__) {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

// Unique Source of truth
const configureStore = () => {
    return createStore(rootReducer, composeEnhancer())
}

export default configureStore