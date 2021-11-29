import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import ContactItem from './ContactItem';

class Contact extends Component {

    constructor(){
        super(...arguments);

        this.titles = {
            '이름' : 'name',
            '나이' : 'age',
            '전화번호' : 'number',
            'Email' : 'email',
            '설명' : 'details'
        };
    }

    render(){
        const {selectedContact} = this.props;
        const {titles} = this;

        return(
            <div className={'contact-box'}>
                {
                    Object.keys(titles).map((title,i) => <ContactItem key={i} title={title} value={selectedContact[titles[title]]}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedContact : state.selectedContact
});

export default connect(mapStateToProps)(Contact)