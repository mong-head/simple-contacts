import React, {Component} from 'react';
import '../../../assets/css/Contacts.css';

class SearchContact extends Component {

    // 이 함수 내에서 onChange관련 함수 네이밍 : handleChangeKeyword (value가 keyword인 경우)

    render(){
        const {keyword,onChangeKeyword} = this.props;

        return(
            <div className={'search-contacts'}>
                <input placeholder="검색어를 입력하세요." className={'search'} value={keyword} onChange={(e) => {onChangeKeyword(e.target.value)}}/>
            </div>
        )
    }
}


export default SearchContact