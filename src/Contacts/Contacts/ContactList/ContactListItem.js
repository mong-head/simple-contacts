import React, {Component} from 'react';
import '../../../assets/css/Contacts.css'

class ContactListItem extends Component {
    render(){
        return(
            <li className={ false ? 'list-contact-clicked' : 'list-contact-unclicked'}>
                <button class={'list-contact-button'}>
                    <div class={'contact-name'}>
                        {'김김김'}
                    </div>
                    <div class={'contact-number'}>
                        {'010-2222-2222'}
                    </div>
                </button>
            </li>
        )
    }
}

export default ContactListItem