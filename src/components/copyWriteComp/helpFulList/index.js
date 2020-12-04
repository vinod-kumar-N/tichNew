import React from 'react';

const helpFullList = () => {
    const list1 = ['Love Letters', 'Personalized emails', 'Resignation Letters', 'Apology Letters']
    const list2 = ['Product Descriptions', 'Whatsapp Messages', 'Tweets', 'Facebook Posts']
    const list3 = ['1200+ Drafts', '10 Different Languages', '100+ Qualified Writers', '100+ Qualified Writers']

    return (
        <div className="List">
            <div className="row no-gutters">
                <div className="col-12 text-center">
                    <h3>A few instances when we could be helpful</h3>
                    <p>when you could send across a note</p>
                </div>
            </div>
            <div className="row no-gutters justify-content-center">
                <div className="col-2">
                    <ul>{list1.map(list => (<li><i className="fa fa-check pr-2" aria-hidden="true"></i>{list}</li>))}</ul>
                </div>
                <div className="col-2">
                    <ul>{list2.map(list => (<li><i className="fa fa-check pr-2" aria-hidden="true"></i>{list}</li>))}</ul>
                </div>
                <div className="col-3">
                    <ul>{list3.map(list => (<li><i className="fa fa-check pr-2" aria-hidden="true"></i>{list}</li>))}</ul>
                </div>
            </div>
        </div>
    )
}

export default helpFullList;