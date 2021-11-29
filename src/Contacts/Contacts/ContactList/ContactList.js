import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
    render(){
        const {contacts} = this.props;

        return(
            <ul className={'contacts-list'}>
                {
                    contacts.map(contact => <ContactListItem contact={contact} />)
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