import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../assets/css/Contacts.css';
import SearchContact from './ContactList/SearchContact';
import ContactList from './ContactList/ContactList';
import Contact from './ContactInfo/Contact';

class Contacts extends Component {

    render(){
        const {handleAddButton,handleDeleteButton,selectedContact} = this.props;

        return(
            <div className={'contacts-box'}>
                <div className={'contacts-list-box'}>
                    <SearchContact />
                    <ContactList />
                </div>
                {
                    selectedContact ? <Contact /> : <div class={'contact-box-unclicked'}>{'선택된 연락처가 없습니다.'}</div>
                }
                <button className={'contact-button add-contact'} onClick={() => handleAddButton(false)}>+</button>
                <button className={'contact-button delete-contact'} disabled={!selectedContact} onClick={() => handleDeleteButton()}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedContact : state.selectedContact
});

export default connect(mapStateToProps)(Contacts)