// contacts (contact list)
export const contactsType = {
    CONTACTS_ADD : 'CONTACTS_ADD',                      // action, saga용
    CONTACTS_ADD_RESULT : 'CONTACTS_ADD_RESULT',        // reducer 용

    CONTACTS_DELETE: 'CONTACTS_DELETE',                 // action, saga용
    CONTACTS_DELETE_RESULT: 'CONTACTS_DELETE_RESULT',   // reducer 용

    CONTACTS_SET : 'CONTACTS_SET',                      // action, saga용
    CONTACTS_SET_RESULT : 'CONTACTS_SET_RESULT'         // reducer 용
}

// selectedContact (선택된 연락처)
export const selectedContactType = {
    SELECTED_CONTACT: 'SELECTED_CONTACT'
}