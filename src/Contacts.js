import React, {Component} from 'react';
import './assets/css/Contacts.css'

class Contacts extends Component {

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
                    this.state.addButton ? 
                    <div className={'contacts-box'}>
                        <div className={'contacts-list-box'}>
                            <div className={'search-contacts'}>
                                <input placeholder="검색어를 입력하세요." className={'search'} />
                            </div>
                            <ul className={'contacts-list'}>
                                <li className={ false ? 'list-contact-clicked' : 'list-contact-unclicked'}>
                                    <button class={'list-contact-button'}>
                                        <div class={'contact-name'}>
                                            {'김김김'}
                                        </div>
                                        <div class={'contact-number'}>
                                            {'010-2222-2222'}
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className={'contact-box'}>
                            <dl className={'contact'}>
                                <dt>
                                    {'이름'}
                                </dt>
                                <dd>
                                    {'김김김'}
                                </dd>
                            </dl>
                            <dl className={'contact'}>
                                <dt>
                                    {'나이'}
                                </dt>
                                <dd>
                                    {'100'}
                                </dd>
                            </dl>
                        </div>
                        <button className={'contact-button add-contact'}>+</button>
                        <button className={'contact-button delete-contact'} disabled>-</button>
                    </div>
                    :
                    <div className={'enroll-contact-box'}>
                        <div className={'enroll-contact'}>
                            <h1>연락처를 등록하세요</h1>
                            <div className={'info-box'}>
                                <label className={'info-title'}>이름</label>
                                <input className={'info-value'} value={''}/>
                            </div>
                            <div className={'info-box'}>
                                <label className={'info-title'}>전화번호</label>
                                <input className={'info-value'} value={''}/>
                            </div>
                            <div className={'enroll-button-box'}>
                                <button className={'enroll-ok'}>확인</button>
                                <button className={'enroll-cancel'}>취소</button>
                            </div>
                        </div>
                    </div>
                }
                </div>
        );
    }
}

export default Contacts;