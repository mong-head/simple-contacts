import {selectedContactType} from './types';

export const selectedContactAction = (contact) => ({
    type: selectedContactType.SELECTED_CONTACT,
    contact
});