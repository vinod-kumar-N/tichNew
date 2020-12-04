import React from 'react';
import Helpful from '../helpFulList';
import PrivacyContent from '../privacyContent';

const contentBanner = () =>{
    return(
        <div className="row no-gutters">
            <div className="col-12">
                <div className="ContentBanner">
                    <div className="Banner">
                        <h1 className="Banner-heading">We are your personal content<br /> writer in your pocket</h1>
                        <p>Give us a brief of what type of content do you want and our<br />team of experienced writers whip out lines that are highly <br />effective</p>
                        <button className="Banner-btn">Give your Requirement</button>                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contentBanner;