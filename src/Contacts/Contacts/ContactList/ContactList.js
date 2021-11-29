import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
    render(){
        const {contacts,searchInput} = this.props;
        
        const filteredContacts = contacts.filter(contact => {
            return Object.keys(contact).map((item) => contact[item].includes(searchInput)).includes(true);
        })

        return(
            <ul className={'contacts-list'}>
                {
                    filteredContacts.map((contact,i) => <ContactListItem key={i} contact={contact} />)
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