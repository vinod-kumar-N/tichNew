import React, { useState, Fragment } from 'react';
import FormInput from '@Uilib/form/formInput';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './rightSideDesign.css';
import { useDispatch, useSelector } from 'react-redux'
import AuthActions from '@Actions/authActions';
import { Redirect } from 'react-router-dom';


const rightSideDesign = () => {
    const inputReg = [
        { id: 1, type: "text", label: "Full Name", Placeholder: "Full Name", name: "name" },
        { id: 2, type: "text", label: "Email", Placeholder: "Email", name: "email" },
        { id: 3, type: "text", label: "Confirm Email", Placeholder: "Confirm Email", name: "email" },
        { id: 4, type: "text", label: "Mobile Number", Placeholder: "+91 ", name: "number" }
    ]
    const options = [
        { value: '0', label: 'Country' },
        { value: 'India', label: 'India' },
        { value: 'USA', label: 'USA' },
        { value: 'China', label: 'China' },
        { value: 'Srilanka', label: 'Srilanka' },
        { value: 'New Zealand', label: 'New Zealand' },
        { value: 'Other', label: 'Other' }
    ];
    const [userState, setState] = useState({
        name: '',
        email: '',
        number: '',
        password: '123456',
        lastname: 'default',
        count: 0,
        isInputInvalid: false,
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((state) => ({
            ...state,
            [name]: value,
            count: state.count + 1,
        }));
    };
    const { name, email, number, password, lastname, isInputInvalid } = userState;
    const handleSubmit = () => {
        if (name.length > 2 && email.length > 3) {
            setState((state) => ({
                ...state,
                isInputInvalid: false,
            }));
            const payload = {
                name,
                email,
                number,
                password,
                lastname
            };
            const { registerUser } = AuthActions;
            console.log("handle submitted");
            dispatch(registerUser(payload));
        } else {
            setState((state) => ({
                ...state,
                isInputInvalid: true,
            }));
            console.log('enter valid input');
        }
    };
    const isAuthenticated = useSelector(
        ({ AuthReducers }) => AuthReducers.isAuthenticated,
    );
    const toAccountPage = <Redirect to="/account-page" />;
    const defaultOption = options[0];
    return isAuthenticated ? (
        toAccountPage
    ) : (
            <Fragment>
                <div className="row no-gutters p-3 RightSideDesign">
                    <div className="col-12">
                        <h1>Create my Account</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                    <div className="col-12">
                        {inputReg.map(items => {
                            return (
                                <FormInput
                                    key={items.id}
                                    type={items.type}
                                    label={items.label}
                                    placeholder={items.Placeholder}
                                    name={items.name}
                                    onChange={handleChange}
                                />)
                        })}
                    </div>
                    <div className="col-12 mt-3">
                        <Dropdown options={options} value={defaultOption} placeholder="Select/Seleccione" />
                    </div>
                    <div className="col-12 mt-3">
                        <button onClick={handleSubmit} className="Reg-btn">Register</button>
                    </div>
                    <div className="col-12 text-center mt-2">
                        <p>By signing Up, I agree to <a href="#">terms & conditions</a>& <a href="#">Privacy Policy</a></p>
                    </div>
                </div>
            </Fragment>
        )
}

export default rightSideDesign;