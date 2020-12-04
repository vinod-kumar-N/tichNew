import React from 'react';
import './orderComp.css';
import { Form } from 'react-bootstrap';
import NxtPrevBtn from './NxtPrevBtn';

const AddOn = () => {
  const imgs = [
    { key: 1, imagename: '../../images/Ferrero.jpg' },
    { key: 2, imagename: '../../images/Ferrero.jpg' },
    { key: 3, imagename: '../../images/Ferrero.jpg' }
  ]

  const delivery = [
    { key: 'a', id: "standard", label: "Standard Shipping", text: "Letter written within 3 working days and then shipped. Ideally, would arrive after 7 working days of being ordered" },
    { key: 'b', id: "express", label: "Express Shipping", text: "Letter written within 1 working day and then shipped. Ideally, arrives the next day  after being shipped. Only for tier 1 cities" },
    { key: 'c', id: "hand", label: "Hand Delivery @", text: "Letter written within 1 working days and then hand delivered the same day. Ideal for birthday surprises late night" }
  ]

  return (
    <div className="row no-gutters AddOn">
      <div className="col-12">
        <h3>Add Ons</h3>
      </div>
      <div className="col-12 vertical-imgs">
        {imgs.map(data => {
          return (
            <img src={data.imagename} className="img-fluid " key={data.key} />
          )
        })}
      </div>
      <div className="col-12">
        <label>Upload The picture</label>
      </div>
      <div className="col-12 border-bottom">
        <div className="row no-gutters">
          <div className="col-3 mr-2">
            <input type="text" className="form-control" />
          </div>
          <div className="col-4 col-md-2">
            <label htmlFor="files" className="btn-browse">Browse</label>
            <input id="files" style={{ visibility: 'hidden' }} type="file" />
          </div>
          <div className="col-4 col-md-2">
            <button className="btn-upload">Upload</button>
          </div>
        </div>
      </div>
      <div className="col-12 mt-2 border-bottom">
        <div className="row no-gutters">
          <div className="col-12">
            <h3>Choose Delivery mode</h3>
          </div>
          <div className="col-12">
            <Form>
              {delivery.map((type) => (
                <div key={type.key} className="mb-3">
                  <Form.Check
                    type="radio"
                    id={type.id}
                    name="Delivery"
                    label={type.label}
                  />
                  <p>({type.text})</p>
                </div>
              ))}
            </Form>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3">
        <div className="row no-gutters">
          <div className="col-12">
            <label><b>Schedule Date of Delivery</b></label>
          </div>
          {/* <div className="col-3">
            <input type="text" className="form-control" />
            <Calendar id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
          </div> */}

        </div>
      </div>
      <div className="col-12">
        <NxtPrevBtn
          previous="Back"
          next="Confirmation"
        />
      </div>
    </div>
  );
};

export default AddOn;