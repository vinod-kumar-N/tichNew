import React from 'react';
import './Banner.css';

const banner = () =>{
    return(
        <div className="Banner">
            <div className="Banner-Heading">
                <h1 className="Banner-heading">Business is more than just <br /> numbers. It's a relationship</h1>
                <p>With messages close to the heart and as tangible as <br /> handwritten letters, great business is only bound to</p>
                <button className="Banner-btn">Get a Custome Quote</button>
            </div>
        </div>
    )
}

export default banner;