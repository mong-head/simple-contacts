import React, {Component} from 'react';
import '../../../assets/css/Contacts.css';

class SearchContact extends Component {

    render(){
        const {searchInput,handleSearchInput} = this.props;

        return(
            <div className={'search-contacts'}>
                <input placeholder="검색어를 입력하세요." className={'search'} value={searchInput} onChange={(e) => {handleSearchInput(e.target.value)}}/>
            </div>
        )
    }
}


export default SearchContact