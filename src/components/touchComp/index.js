import React from 'react';
import './touchcomp.css';
import AddressMap from './addressMap';
import FormInputs from '../formInputComp';
import {Button} from 'react-bootstrap';
import BgImg from '../bgImg';
const touchBase = () => {
    const inputtype = [
        {id:1,label:"Full Name",type:"text",placeholder:"Enter your name"},
        {id:2,label:"Email",type:"text",placeholder:"Enter your Email Address"},
        {id:3,label:"Subject", type:"text", placeholder:"Enter subject line"},
        {id:4,label:"Message"}

    ]
    return(
        <div className="touchBase">
            <BgImg heading="Get in touch" class="text-uppercase text-white"/>
        <div className="container mt-4">
            <div className="row no-gutters">
                <div className="col-12 col-md-3 border-right border-warning pr-5">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <h5 className="text-uppercase">Get in touch</h5>
                            <p>Quisque iaculis purus lobster cursus suscipit nam,eget condit elit eros</p>
                        </div>
                        <div className="col-12">
                            <p className="text-btn">Send us an Email</p>
                        </div>
                        <div className="col-12">
                            <p className="text-btn">Give us a call on +91 8971936444</p>
                        </div> 
                        <div className="col-12">
                            <h6 className="text-uppercase">Our Address</h6>
                            <p>The indian Handwritten Letter Co.
                                <br />
                                No 33. Aralimar Road.
                                <br />
                                Near Panchmukhi Ganapathi temple.
                                <br />
                                Bengaluru, India - 560033
                            </p>
                            <AddressMap />
                        </div> 
                    </div>               
                </div>
                <div className="col-12 col-md-9 pl-5">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <h4 className="text-uppercase">Drop a message</h4>
                        </div>
                        <div className="col-12">
                            {inputtype.map(data =>{
                                return(
                                <FormInputs 
                                key={data.id}
                                label={data.label}
                                type={data.type}
                                placeholder={data.placeholder}/>)}
                            )}
                            <Button variant="primary" className="btn-color">Send Message</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default touchBase;