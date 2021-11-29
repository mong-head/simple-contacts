import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/css/Contacts.css';
import Contacts from './Contacts/Contacts';
import Enrollment from './Enroll/Enrollment';
import {contactsDeleteAction} from '../Store/Actions/contactsAction';
import {selectedContactAction} from '../Store/Actions/selectedContactAction'

class Layout extends Component {

    constructor(props){
        super(props);

        this.state = {
            addButton : true
        }

    }

    handleAddButton = (state) => {
        this.setState({addButton: state})
    }

    handleDeleteButton = () => {
        const {selectedContact,deleteContact,emptySelectedContact} = this.props;
        
        deleteContact(selectedContact);
        emptySelectedContact();
    }


    render() {
        const {addButton} = this.state
        return (
            <div className={'contacts'}>
                <h1>Unit6 연락처</h1>
                {
                    addButton ? <Contacts handleAddButton={this.handleAddButton} handleDeleteButton={this.handleDeleteButton}/> : <Enrollment handleAddButton={this.handleAddButton} />
                }
            </div>
        );
    }
}

// useSelector 비슷
const mapStateToProps = (state) => ({
    contacts : state.contacts,
    selectedContact : state.selectedContact
});

const mapDispatchToProps = (Dispatch) => {
    return {
        deleteContact : (contact) => Dispatch(contactsDeleteAction(contact)),
        emptySelectedContact : () => Dispatch(selectedContactAction(false))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);