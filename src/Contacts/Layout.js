import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/css/Contacts.css';
import fetchApi from '../fetchApi';
import Contacts from './Contacts/Contacts';
import Enrollment from './Enroll/Enrollment';
import {contactsDeleteAction, contactsSetAction} from '../Store/Actions/contactsAction';
import {selectedContactAction} from '../Store/Actions/selectedContactAction'

class Layout extends Component {

    constructor (props){
        super(props);

        this.state = {
            addButton : true
        }

    }

    componentDidMount() {
        (async () => {
            this.results = await fetchApi().getAll();
            this.props.setContacts(this.results);
        })()
    }

    handleAddButton = (state) => {
        this.setState({addButton: state})
    }

    handleDeleteButton = () => {
        const {selectedContact,deleteContact,emptySelectedContact} = this.props;
        
        (async () => {
            this.results = await fetchApi().deleteContact(selectedContact['id']);
            deleteContact(this.results);
            emptySelectedContact();
        })()
    }


    render() {
        const {addButton} = this.state;

        console.log('contacts',this.props.contacts)

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
        setContacts : (contacts) => Dispatch(contactsSetAction(contacts)),
        deleteContact : (contact) => Dispatch(contactsDeleteAction(contact)),
        emptySelectedContact : () => Dispatch(selectedContactAction(false))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);