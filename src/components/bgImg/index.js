import React from 'react';
import './bg.css';
const bgImg = (props) =>{
    return(
        <div className="bg-overlay">
            <div className="row no-gutters d-inline text-center">
                <h1 className={props.class}>{props.heading}</h1>
                <h4 className="text-white">Aliguam elementum metus suscipit erot suscipit fermentum utac nigh</h4>                
            </div>
        </div>
    )
};
export default bgImg;