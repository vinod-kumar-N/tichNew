import React, { useState, Fragment } from 'react';
//import FormInput from '@Uilib/form/formInput';
import FormInput from '../formInputComp';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from '@Actions/authActions';
import './style.scss';
import { Redirect } from 'react-router-dom';

import RightComp from '../signupComp/leftSide';
import LeftComp from '../signupComp/rightSide';

const SignUpForm = () => {
    const [userState, setState] = useState({
        username: '',
        password: '',
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
    const { username, password, isInputInvalid } = userState;
    const alertHtml = isInputInvalid && (
        <span className="error-alert-box">Please enter valid input!</span>
    );
    if (isInputInvalid) {
        setTimeout(() => {
            setState((state) => ({
                ...state,
                isInputInvalid: false,
            }));
        }, 3000);
    }
    const isAuthenticated = useSelector(
        ({ AuthReducers }) => AuthReducers.isAuthenticated,
    );
    const toAccountPage = <Redirect to="/account-page" />;
    return isAuthenticated ? (
        toAccountPage
    ) : (
            <Fragment>
                <div className="container">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-4">
                            <div className="container SignIn">
                                <div className="row no-gutters">
                                    <div className="col-12">
                                        <h1>Sign In</h1>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                    </div>
                                    <div className="col-12">
                                        {alertHtml}
                                        <FormInput
                                            type="text"
                                            label="Email/Mobile number"
                                            placeholder="Enter your email or mobile number"
                                            onChange={handleChange}
                                            value={username}
                                            name="username"
                                        />
                                        <FormInput
                                            type="password"
                                            label="Password"
                                            placeholder="Enter Password"
                                            onChange={handleChange}
                                            name="password"
                                        />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <input type="checkbox" />
                                        <span>Keep me logged in</span>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button onClick={handleSubmit} className="login-btn"> Sign In </button>
                                    </div>
                                    <div className="col-12 mt-3 mb-3 text-center">
                                        <a href="#"><b>Forgot Password</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <RightComp
                                heading="Don't have an account?"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                button="Create my account"
                                class="SignIn-Container"
                                mainclass="row no-gutters bg-overlay RightDesign" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
};

export default SignUpForm;
