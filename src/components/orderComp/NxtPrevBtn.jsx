import React from 'react';
import './orderComp.css';

const btns = (props) => {
    return (
        <div className="row no-gutters Btns mt-3">
            <div className="col-6">
                <button className="Btn-Prev">{props.previous}</button>
            </div>
            <div className="col-6 text-right">
                <button className="Btn-Nxt">{props.next}</button>
            </div>
        </div>
    )
}

export default btns;