import { contactsType } from '../Actions/types';
import {id} from '../../symbolizeObjectId';

const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case contactsType.CONTACTS_ADD:
            return [...state, action.contact];
        case contactsType.CONTACTS_DELETE:
            return state.filter(contact => contact[id] !== action.contact[id]);
        case contactsType.CONTACTS_SET:
            return action.contacts;
        default:
            return state;
    }
};

export default contactsReducer;