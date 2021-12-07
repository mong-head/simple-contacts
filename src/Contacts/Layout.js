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

    async componentDidMount() {
        const results = await fetchApi().getAll();
        this.props.setContacts(results);
    }

    onClickAddButton = (state) => {
        this.setState({addButton: state})
    }

    onClickDeleteButton = async () => {
        const {selectedContact,deleteContact,emptySelectedContact} = this.props;
        
        const results = await fetchApi().deleteContact(selectedContact['id']);
        deleteContact(results);
        emptySelectedContact();
    }


    render() {
        const {addButton} = this.state;

        return (
            <div className={'contacts'}>
                <h1>Unit6 연락처</h1>
                {
                    addButton ? 
                        <Contacts onClickAddButton={this.onClickAddButton} onClickDeleteButton={this.onClickDeleteButton}/> : 
                        <Enrollment onClickAddButton={this.onClickAddButton} />
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