import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/Contacts.css';
import ContactItem from './ContactItem';
import titles from '../../../titles';

class Contact extends Component {

    render(){
        const {selectedContact} = this.props;

        return(
            <div className={'contact-box'}>
                {
                    Object.keys(titles).map((title,i) => <ContactItem key={title} title={title} value={selectedContact[titles[title]]}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedContact : state.selectedContact
});

export default connect(mapStateToProps)(Contact)