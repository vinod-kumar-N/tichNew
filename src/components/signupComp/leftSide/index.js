import React from 'react';
import '../signUp.css';

const leftSideDesign = (props) => {
    return (
        <div className={props.mainclass}>
            <div className="col-12">
                <div className={props.class}>
                    <h1 className="text-white">{props.heading}</h1>
                    <h4 className="text-white">{props.text}</h4>
                    <span className="sign-in-button">{props.button}</span>
                </div>
            </div>
        </div>
    )
}

export default leftSideDesign;