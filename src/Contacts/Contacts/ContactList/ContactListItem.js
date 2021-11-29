import React, {Component} from 'react';
import '../../../assets/css/Contacts.css'

class ContactListItem extends Component {
    render(){
        return(
            <li className={ false ? 'list-contact-clicked' : 'list-contact-unclicked'}>
                <button className={'list-contact-button'}>
                    <div className={'contact-name'}>
                        {'김김김'}
                    </div>
                    <div className={'contact-number'}>
                        {'010-2222-2222'}
                    </div>
                </button>
            </li>
        )
    }
}

export default ContactListItem