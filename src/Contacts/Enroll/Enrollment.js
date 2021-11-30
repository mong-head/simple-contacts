import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../assets/css/Contacts.css';
import EnrollItem from './EnrollItem';
import {contactsAddAction} from '../../Store/Actions/contactsAction'

class Enrollment extends Component {

    constructor(props){
        super(props);

        this.state = {
            name : '',
            number : '',
            age : '',
            email : '',
            details : ''
        }

        this.titles = {
            '이름' : 'name',
            '나이' : 'age',
            '전화번호' : 'number',
            'Email' : 'email',
            '설명' : 'details'
        };
    }

    validateValue = (contact) => {
        const {name,number,age,email,details} = contact;

        // 빈 값 체크
        if(name === '' || number === '' || age === '' || email === '' || details === '') return false;

        const ageCheck = /^[1-9]?[0-9]{1}$|^100$/;
        const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const numberCheck = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if(ageCheck.test(age) && emailCheck.test(email) && numberCheck.test(number)) return true;
        else return false;
    }

    handleSubmit = () => {
        const {handleAddButton,addContact} = this.props;
        const {name,number,age,email,details} = this.state;

        const contact = {
            name: name,
            number: number,
            age: age,
            email: email,
            details: details
        }

        if(!this.validateValue(contact)) return;

        addContact(contact);
        handleAddButton(true);
    }

    render(){
        const {handleAddButton} = this.props;
        const {name,number,age,email,details} = this.state;
        const {titles,handleSubmit} = this;
        const contact = {
            'name' : name,
            'number' : number,
            'age' : age,
            'email' : email,
            'details' : details
        }

        return(
            <div className={'enroll-contact-box'}>
                <div className={'enroll-contact'}>
                    <h1>연락처를 등록하세요</h1>
                    {
                        Object.keys(titles).map((title,i) => 
                            <EnrollItem key={i} title={title} value={contact[titles[title]]} onChange={value =>  this.setState({ [titles[title]] : value})} />)
                    }

                    <div className={'enroll-button-box'}>
                        <button className={'enroll-ok'} onClick={handleSubmit}>확인</button>
                        <button className={'enroll-cancel'} onClick={() => handleAddButton(true)}>취소</button>
                    </div>
                </div>
            </div>
        )
    }
}

// useSelector
const mapStateToProps = (state) => ({
    contacts: state.contacts
  })

// useDispatcher
const mapDispatchToProps = (Dispatch) => {
    return {
        addContact : (contact) => Dispatch(contactsAddAction(contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enrollment)