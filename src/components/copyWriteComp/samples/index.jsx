import React from 'react';

const samples = () =>{
    const sampleimg = [
        {key:1,img:'../../../images/template-placeholder.png',heading:'Lorem ipsum dolor sit amet'},
        {key:2,img:'../../../images/template-placeholder.png',heading:'Lorem ipsum dolor sit amet'},
        {key:3,img:'../../../images/template-placeholder.png',heading:'Lorem ipsum dolor sit amet'},
        {key:4,img:'../../../images/template-placeholder.png',heading:'Lorem ipsum dolor sit amet'}
    ]
    return(
        <div className="Sample">
            <div className="row no-gutters">
                <div className="col-12 text-center title-section">
                    <h2 className="text-uppercase">our samples</h2>
                </div>
            </div>
                <div className="row no-gutters text-center">
                    {sampleimg.map(imgdata =>{
                        return(
                            <div className="col-3" key={imgdata.key}>
                                <img src={imgdata.img} className="img-fulid" />
                                <p className="font-size-16">{imgdata.heading}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="row no-gutters mt-3 mb-4">
                    <div className="col-12 text-center">
                        <button className="Banner-btn">View all Samples</button>
                    </div>
                </div>
        </div>
    )
}

export default samples;