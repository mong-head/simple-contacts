import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import {selectedContactAction} from '../../../Store/Actions/selectedContactAction';

class ContactListItem extends Component {

    handleClick = (e) => {
        const {contact,selectContact} = this.props;

        selectContact(contact);
    }

    render(){
        const {handleClick} = this;
        const {contact,selectedContact} = this.props;

        return(
            <li className={ selectedContact === contact ? 'list-contact-clicked' : 'list-contact-unclicked'}>
                <button className={'list-contact-button'} onClick={handleClick}>
                    <div className={'contact-name'}>
                        {contact.name}
                    </div>
                    <div className={'contact-number'}>
                        {contact.number}
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