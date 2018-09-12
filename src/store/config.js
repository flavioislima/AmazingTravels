import { createStore, combineReducers } from 'redux'

import reducer from './reducers/root'

const rootReducer = combineReducers({
    places: reducer
})


// Unique Source of truth
const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore