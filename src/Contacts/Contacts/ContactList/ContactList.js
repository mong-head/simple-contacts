import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
    render(){
        const {contacts,searchInput} = this.props;
        
        const filteredContacts = contacts.length > 0 && contacts.filter(contact => {
            return Object.keys(contact).map((item) => {
                let result;
                result = (contact[item]).toString().includes(searchInput)
                item === 'id' && (result = false); // id 제외 찾기
                return result;
            }).includes(true);
        })

        return(
            <ul className={'contacts-list'}>
                {
                    filteredContacts && filteredContacts.map((contact,i) => <ContactListItem key={i} contact={contact} />)
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