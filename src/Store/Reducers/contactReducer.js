const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case 'CONTACTS_ADD':
            return [...state,action.contact];
        default:
            return state;
    }
};

export default contactsReducer;