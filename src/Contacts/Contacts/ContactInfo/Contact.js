import React, {Component} from 'react';
import '../../../assets/css/Contacts.css';
import ContactItem from './ContactItem';

class Contact extends Component {

    constructor(){
        super(...arguments);

        this.titles = ['이름','나이','전화번호','Email','설명']
    }

    render(){
        return(
            <div className={'contact-box'}>
                {
                    this.titles.map((title,i) => <ContactItem key={i} title={title}/>)
                }
            </div>
        )
    }
}

export default Contact