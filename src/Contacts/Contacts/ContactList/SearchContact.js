import React, {Component} from 'react';
import '../../../assets/css/Contacts.css'

class SearchContact extends Component {
    render(){
        return(
            <div className={'search-contacts'}>
                <input placeholder="검색어를 입력하세요." className={'search'} />
            </div>
        )
    }
}

export default SearchContact