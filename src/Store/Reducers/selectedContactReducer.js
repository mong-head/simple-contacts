import { selectedContactType } from "../Actions/types";

const selectedContactReducer = (state = false, action) => {
    switch (action.type) {
        case selectedContactType.SELECTED_CONTACT:
            return action.contact;
        default:
            return state;
    }
};

export default selectedContactReducer;