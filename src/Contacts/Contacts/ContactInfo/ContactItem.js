import React, {Component} from 'react';
import '../../../assets/css/Contacts.css'

class ContactItem extends Component {
    render(){
        const {title,value} = this.props;
        return(
            <dl className={'contact'}>
                <dt>
                    {title}
                </dt>
                <dd>
                    {value}
                </dd>
            </dl>
        )
    }
}

export default ContactItem