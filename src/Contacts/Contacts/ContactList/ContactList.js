import React, {Component} from 'react';
import '../../../assets/css/Contacts.css';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
    render(){
        return(
            <ul className={'contacts-list'}>
                <ContactListItem />
            </ul>
        )
    }
}

export default ContactList