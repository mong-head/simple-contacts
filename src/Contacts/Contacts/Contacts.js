import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../../assets/css/Contacts.css';
import SearchContact from './ContactList/SearchContact';
import ContactList from './ContactList/ContactList';
import Contact from './ContactInfo/Contact';

class Contacts extends Component {

    constructor(props){
        super(props);

        this.state = {
            keyword : ''
        }
    }

    onChangeKeyword = (input) => {
        this.setState({keyword: input});
    }

    render(){
        const {keyword} = this.state;
        const {onChangeKeyword} = this; // 네이밍 : onChangeKeyword (동사형, onChange와 관련되어있으면 그에 대한 이름으로)
        const {onClickAddButton,onClickDeleteButton,selectedContact} = this.props;

        return(
            <div className={'contacts-box'}>
                <div className={'contacts-list-box'}>
                    <SearchContact keyword={keyword} onChangeKeyword={onChangeKeyword} />
                    <ContactList keyword={keyword} />
                </div>
                {
                    selectedContact ? <Contact /> : <div class={'contact-box-unclicked'}>{'선택된 연락처가 없습니다.'}</div>
                }
                <button className={'contact-button add-contact'} onClick={() => onClickAddButton(false)}>+</button>
                <button className={'contact-button delete-contact'} disabled={!selectedContact} onClick={() => onClickDeleteButton()}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedContact : state.selectedContact
});

export default connect(mapStateToProps)(Contacts)