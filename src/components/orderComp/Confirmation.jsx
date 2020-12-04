import React from 'react';
import './orderComp.css';
import NxtPrevBtn from './NxtPrevBtn';

const Confirmation = () => {
  return (
    <div className="Confirmation">
      <div className="row no-gutters border-bottom border-warning pb-3 mt-3">
        <div className="col-8 pr-3">
          <label className="font-size-18"><b>Order Summary</b></label>
          <div className="row no-gutters border-bottom border-warning">
            <div className="col-12 col-md-6">
              <div className="row no-gutters">
                <div className="col-6">
                  <label className="font-size-14">Occasion</label>
                  <p className="font-size-13"><b>Birthday</b></p>
                </div>
                <div className="col-6">
                  <label className="font-size-14">Handwriting Style</label>
                  <p className="font-size-13"><b>Savoye LET Plain</b></p>
                </div>
                <div className="col-6">
                  <label className="font-size-14">Language</label>
                  <p className="font-size-13"><b>English</b></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <label className="font-size-14">Design Template</label><br />
              <img src="../../images/template-placeholder.png" className="img-fluid" />
            </div>
            <div className="col-12 col-md-2">
              <label className="font-size-14">Add On</label><br />
              <img src="../../images/template-placeholder.png" className="img-fluid" />
            </div>
            <div className="col-12">
              <label className="font-size-14">Additional notes</label>
              <p className="font-size-13"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non luctus risus. In porta orci vestibulum.</b></p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-4">
              <label>Recipient's Address</label>
              <p><b>Ankit Anubhav<br />
                No 33 Aralimara Road<br />
                Banaswadi Main Road<br />
                Bangalore<br />
                560033, India<br /><br />
                8971936444</b></p>
            </div>
            <div className="col-4">
              <label>Sender's Address</label>
              <p><b>Jashwanth<br />
                No 45 Koramangala<br />
                5th Main Cross<br />
                Bangalore<br />
                560343, India<br /><br />
                9971348823<br />
                jashwanth@gmail.com
                </b></p>
            </div>
            <div className="col-4">
              <label>Schedule Date of Delivery</label>
              <p><i className="fa fa-calendar fa-2x pr-3" aria-hidden="true"></i><b>12/08/2017</b></p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <label className="font-size-18"><b>Payment Details</b></label>
          <div className="row no-gutters PaymentDetails">
            <div className="col-12">
              <div className="row no-gutters">
                <div className="col-12">
                  <label><b>Apply Coupons</b></label>
                </div>
                <div className="col-7">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-5 text-right">
                  <button className="btn-upload">Apply</button>
                </div>
              </div>
              <div className="row no-gutters border-bottom mt-3">
                <div className="col-6">
                  <label className="font-size-14"><b>Payment</b></label>
                </div>
                <div className="col-6 text-right">
                  <label className="font-size-14"><u><b>Price in USD</b></u></label>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-6">
                  <label>Letter</label>
                </div>
                <div className="col-6 text-right">
                  <label><i className="fa fa-inr" aria-hidden="true"></i> 100</label>
                </div>
                <div className="col-6">
                  <label>Add-Ons</label>
                </div>
                <div className="col-6 text-right">
                  <label><i className="fa fa-inr" aria-hidden="true"></i> 400</label>
                </div>
              </div>
              <div className="row no-gutters border-top border-bottom pt-2">
                <div className="col-6">
                  <label><b>Subtotal</b></label>
                </div>
                <div className="col-6 text-right">
                  <label><i className="fa fa-inr" aria-hidden="true"></i> 500</label>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-9">
                  Indian Standard Delivery
                </div>
                <div className="col-3 text-right">
                  <label><i className="fa fa-inr" aria-hidden="true"></i> 60</label>
                </div>
                <div className="col-6  font-weight-bold">
                  <label className="text-success">Discounts</label>
                </div>
                <div className="col-6 text-right  font-weight-bold">
                  <label className="text-success"><i className="fa fa-inr" aria-hidden="true"></i> 50</label>
                </div>
                <div className="col-6">
                  Tax
                </div>
                <div className="col-6 text-right">
                  <label><i className="fa fa-inr" aria-hidden="true"></i> 80</label>
                </div>
              </div>
              <div className="row no-gutters border-top border-bottom font-size-18 font-weight-bold">
                <div className="col-6">
                  <label>Total</label>
                </div>
                <div className="col-6 text-right">
                  <label><i className="fa fa-inr" aria-hidden="true"></i> 590</label>
                </div>
              </div>
              <div className="row no-gutters mb-3">
                <div className="col-12">
                  <label className="font-size-12"><sup>*</sup>Part of the taxes payable to the government</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NxtPrevBtn 
        previous="Back"
        next="Make Payment"
      />
    </div>
  );
}

export default Confirmation;