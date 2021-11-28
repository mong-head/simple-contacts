import React, {Component} from 'react';
import '../../assets/css/Contacts.css';
import EnrollItem from './EnrollItem';

class Enrollment extends Component {

    constructor(){
        super(...arguments);

        this.titles = ['이름','전화번호','나이','email','설명']
    }

    render(){
        return(
            <div className={'enroll-contact-box'}>
                <div className={'enroll-contact'}>
                    <h1>연락처를 등록하세요</h1>
                    {
                        this.titles.map((title,i) => <EnrollItem key={i} title={title} />)
                    }
                    <div className={'enroll-button-box'}>
                        <button className={'enroll-ok'}>확인</button>
                        <button className={'enroll-cancel'}>취소</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Enrollment