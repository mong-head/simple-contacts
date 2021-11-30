const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case 'CONTACTS_ADD':
            return [...state, action.contact];
        case 'CONTACTS_DELETE':
            return state.filter(contact => contact.id !== action.contact.id);
        case 'CONTACTS_SET':
            return action.contacts;
        default:
            return state;
    }
};

export default contactsReducer;