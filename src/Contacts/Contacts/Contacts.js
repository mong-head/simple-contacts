import React, {Component} from 'react';
import '../../assets/css/Contacts.css';
import SearchContact from './ContactList/SearchContact';
import ContactList from './ContactList/ContactList';
import Contact from './ContactInfo/Contact';

class Contacts extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedContact : false
        }
    }

    render(){
        const {handleAddButton} = this.props;
        return(
            <div className={'contacts-box'}>
                <div className={'contacts-list-box'}>
                    <SearchContact />
                    <ContactList />
                </div>
                {
                    this.state.selectedContact ? <Contact /> : <div class={'contact-box-unclicked'}>{'선택된 연락처가 없습니다.'}</div>
                }
                <button className={'contact-button add-contact'} onClick={() => handleAddButton(false)}>+</button>
                <button className={'contact-button delete-contact'} disabled>-</button>
            </div>
        )
    }
}

export default Contacts