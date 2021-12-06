import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
    render(){
        const {contacts,searchInput} = this.props;

        const filteredContacts = contacts.filter(contact => {
            return Object.keys(contact).map((key) => {
                if(key.id === 'id') return false; // id 제외
                return (contact[key]).toString().includes(searchInput);
            }).includes(true);
        })

        return(
            <ul className={'contacts-list'}>
                {
                    filteredContacts.map((contact) => <ContactListItem key={contact.id} contact={contact} />) // key index X, contents와 관련있는 값으로?
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts : state.contacts,
    selectedContact : state.selectedContact
});

export default connect(mapStateToProps)(ContactList)