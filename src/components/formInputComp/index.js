import React from 'react';
import './forminput.css';

const formInputType = (props) =>{
    return(
        <div className="form-input-types">
            <input type={props.type} name={props.name} required/> 
            <label htmlFor={props.name} className="label-name">
                <span className="content-name">{props.label}</span>
            </label>          
        </div>
    )
}

export default formInputType;