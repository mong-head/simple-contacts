import {createStore, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import contactReducer from './Reducers/contactReducer';

const reducers = combineReducers({
    contacts : contactReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;