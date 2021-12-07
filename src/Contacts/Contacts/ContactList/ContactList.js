import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import ContactListItem from './ContactListItem';
import {selectedContactAction} from '../../../Store/Actions/selectedContactAction';

class ContactList extends Component {

    render(){
        const {contacts,keyword} = this.props;

        const filteredContacts = contacts.filter(contact => {
            return Object.keys(contact).map((key) => {
                if(key.id === 'id') return false; // id 제외
                return (contact[key]).toString().includes(keyword);
            }).includes(true);
        })

        return(
            <ul className={'contacts-list'} >
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

const mapDispatchToProps = (Dispatch) => {
    return {
        selectContact : (contact) => Dispatch(selectedContactAction(contact))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ContactList)