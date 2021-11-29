import React, {Component} from 'react';
import '../../assets/css/Contacts.css'

class EnrollItem extends Component {

    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render(){
        const {title,value} = this.props;
        const {handleChange} = this;
        return(
            <div className={'info-box'}>
                <label className={'info-title'}>{title}</label>
                <input className={'info-value'} value={value} onChange={handleChange}/>
            </div>
        )
    }
}

export default EnrollItem