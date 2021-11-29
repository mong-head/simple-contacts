const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case 'CONTACTS_ADD':
            return [...state, action.contact];
        case 'CONTACTS_DELETE':
            return state.filter(contact => contact !== action.contact);
        default:
            return state;
    }
};

export default contactsReducer;