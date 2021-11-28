import React, {Component} from 'react';
import '../../../assets/css/Contacts.css'

class ContactItem extends Component {
    render(){
        return(
            <dl className={'contact'}>
                <dt>
                    {this.props.title}
                </dt>
                <dd>
                    {'김김김'}
                </dd>
            </dl>
        )
    }
}

export default ContactItem