import React from 'react';
import FormInputType from '../formInputComp';
import {Button} from 'react-bootstrap';
import './changePassword.css';
const changePassword = (props) =>{
    const password = [
        {id:1,label:"Old Password",type:"text"},
        {id:2,label:"New Password", type:"text"},
        {id:3,label:"Confirm Password", type:"text"}
    ]
    return(
        <div className="border-top border-warning mt-3 pt-3 ChangePassword">
            <h4>Change Password</h4>
            {password.map(pwd =>{
                return(
                    <FormInputType
                    key={pwd.id}
                    label={pwd.label}
                    type={pwd.type} />
                )
            })}
            <Button variant="primary" className="btn-color">Update Password</Button>{' '}
        </div>
    )
}
export default changePassword;