const selectedContactReducer = (state = false, action) => {
    switch (action.type) {
        case 'SELECTED_CONTACT':
            return action.contact;
        default:
            return state;
    }
};

export default selectedContactReducer;