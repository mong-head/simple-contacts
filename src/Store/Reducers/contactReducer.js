const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case 'CONTACTS':
            return action.contacts;
        default:
            return state;
    }
};

export default contactsReducer;