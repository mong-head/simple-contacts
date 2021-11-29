import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/css/Contacts.css';
import Contacts from './Contacts/Contacts';
import Enrollment from './Enroll/Enrollment';


class Layout extends Component {

    constructor(){
        super(...arguments);

        this.state = {
            addButton : true
        }

    }


    render() {
        return (
            <div className={'contacts'}>
                <h1>Unit6 연락처</h1>
                {
                    this.state.addButton ? <Contacts /> : <Enrollment />
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