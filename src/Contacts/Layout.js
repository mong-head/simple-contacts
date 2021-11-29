import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/css/Contacts.css';
import Contacts from './Contacts/Contacts';
import Enrollment from './Enroll/Enrollment';


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


    render() {
        const {addButton} = this.state
        return (
            <div className={'contacts'}>
                <h1>Unit6 연락처</h1>
                {
                    addButton ? <Contacts handleAddButton={this.handleAddButton}/> : <Enrollment handleAddButton={this.handleAddButton}/>
                }
            </div>
        );
    }
}

// useSelector 비슷
const mapStateToProps = (state) => ({
    contacts : state.contacts
});

export default connect(mapStateToProps)(Layout);