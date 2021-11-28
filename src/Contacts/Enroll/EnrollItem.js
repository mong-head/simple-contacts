import React, {Component} from 'react';
import '../../assets/css/Contacts.css'

class EnrollItem extends Component {
    render(){
        return(
            <div className={'info-box'}>
                <label className={'info-title'}>{this.props.title}</label>
                <input className={'info-value'} value={''}/>
            </div>
        )
    }
}

export default EnrollItem