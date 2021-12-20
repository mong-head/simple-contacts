import {contactsType} from './types';

export const contactsAddAction = (contact) => ({
    type: contactsType.CONTACTS_ADD,
    contact
});

export const contactsDeleteAction = (contact) => ({
    type: contactsType.CONTACTS_DELETE,
    contact
});

export const contactsSetAction = () => {
    return { type: contactsType.CONTACTS_SET }
};