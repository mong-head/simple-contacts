export const contactsAddAction = (contact) => ({
    type: 'CONTACTS_ADD',
    contact
});

export const contactsDeleteAction = (contact) => ({
    type: 'CONTACTS_DELETE',
    contact
});

export const contactsSetAction = (contacts) => ({
    type: 'CONTACTS_SET',
    contacts
});