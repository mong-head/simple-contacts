import { contactsType } from '../Actions/types';
import {id} from '../../symbolizeObjectId';

const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case contactsType.CONTACTS_ADD_RESULT:
            return action.contact ? [...state, action.contact] : state;
        case contactsType.CONTACTS_DELETE_RESULT:
            return action.contact ? state.filter(contact => contact[id] !== action.contact[id]) : state;
        case contactsType.CONTACTS_SET_RESULT:
            return action.contacts ? action.contacts : state;
        default:
            return state;
    }
};

export default contactsReducer;