import React from 'react';

const RecipientAddress = () => {
    return (
        <form className="tihlc-std-form">
        <div className="form-row">
          <div className="form-group col-md-12">
            <label className="col-form-label">Choose Recipient's</label>
            <select className="form-control">
              <option value="">-Select-</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="form-group col-md-12">
            <label className="col-form-label">Full Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-12">
            <label className="col-form-label">Contact Number</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label className="col-form-label">Country</label>
            <select className="form-control">
              <option value="">-Select-</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="col-form-label">State</label>
            <select className="form-control">
              <option value="">-Select-</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label className="col-form-label">City</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label className="col-form-label">Pincode</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-12">
            <label className="col-form-label">Address line</label>
            <input type="text" className="form-control location-input" />
          </div>
          <div className="form-group col-md-12">
            <label className="col-form-label">Landmark</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </form>
    
    )
}

export default RecipientAddress;