import React, {Component} from 'react';
import '../assets/css/Contacts.css';
import Contacts from './Contacts/Contacts';
import Enrollment from './Enroll/Enrollment';

class Layout extends Component {

    constructor(){
        super(...arguments);

        this.state = {
            addButton : false
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

export default Layout;