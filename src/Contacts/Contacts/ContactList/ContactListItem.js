import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import {selectedContactAction} from '../../../Store/Actions/selectedContactAction';

class ContactListItem extends Component {

    // click하거나 tab키 눌렀을 때
    handleFocusContact = (e) => {
        const {contact,selectContact} = this.props;

        selectContact(contact);
    }

    render(){
        const {handleFocusContact} = this;
        const {contact,selectedContact} = this.props;

        return(
            <li className={ selectedContact === contact ? 'list-contact-clicked' : 'list-contact-unclicked'} >
                <button className={'list-contact-button'} onFocus={handleFocusContact}>
                    <div className={'contact-name'}>
                        {contact.name}
                    </div>
                    <div className={'contact-number'}>
                        {contact.phoneNumber}
                    </div>
                </button>
            </li>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedContact : state.selectedContact
});

const mapDispatchToProps = (Dispatch) => {
    return {
        selectContact : (contact) => Dispatch(selectedContactAction(contact))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactListItem)