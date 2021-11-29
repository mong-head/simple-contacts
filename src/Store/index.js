import {createStore, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import contactReducer from './Reducers/contactReducer';
import selectedContactReducer from "./Reducers/selectedContactReducer";

const reducers = combineReducers({
    contacts : contactReducer,
    selectedContact : selectedContactReducer
});

const store = createStore(reducers, composeWithDevTools());

export default store;