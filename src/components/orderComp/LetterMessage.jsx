import React, { useState, useRef } from "react";
import templatePlaceHolderImg from "@Images/template-placeholder.png";
import PersonalService from '@Services/personalService';
import Dropdown from 'react-dropdown';
import { useSelector } from 'react-redux';
import 'react-dropdown/style.css';

const LetterMessage = (props) => {
  const { CustomerId, personalMessage } = useSelector(
    ({ AuthReducers }) => AuthReducers.newUserInfo ? AuthReducers.newUserInfo : AuthReducers.userInfo,
    ({ personalReducers }) => personalReducers.personalMessage
  );
  const [personalMessageData, setpersonalMessage] = useState({OccassionId:'', LanguageId:'', HandwritingId:'', DesignTemplateId: '',CustomerID: CustomerId})
  const counterEl = useRef(null)
  const sendRecipients = async ()=>{
    let result = await PersonalService.addPersonalMessage(personalMessageData);
  }
  const setOccasion = (e) => {
    setpersonalMessage({
      ...personalMessageData,
      OccassionId: e.value
    })
  }
  const setLanguage = (e) => {
    setpersonalMessage({
      ...personalMessageData,
      LanguageId: e.value
    })
  }
  const setHandwritting = (e) => {
    setpersonalMessage({
      ...personalMessageData,
      HandwritingId: e.value
    })
  }
  const setTemplate = (id) => {
    setpersonalMessage({
      ...personalMessageData,
      DesignTemplateId: id
    })
  }

  const setNotes = (e) => {
    setpersonalMessage({
      ...personalMessageData,
      AdditionalNotes: e.target.value
    })
  }
  const setWordCount = (e) => {
    let wordcount = e.target.value.length;
    let encodedText = encodeURI(e.target.value)
    setpersonalMessage({
      ...personalMessageData,
      WordCount: wordcount,
      MessageInURLEncoded: encodedText,
      MessageInHTMLURLEncoded: encodedText
    })
  }
  const DDList = [
    {
      title: 'Occassion',
      ddValue:[
        { value: '0', label: '-Select-' },
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
        { value: '4', label: 'Four' }
      ],
      fn: setOccasion
    },
   {
    title: 'Choose Language',
    ddValue: [
      { value: '0', label: '-Choose Language-' },
      { value: 'Kannada', label: 'Kannada' },
      { value: 'English', label: 'English' },
      { value: 'Hindi', label: 'Hindi' },
      { value: 'Telegu', label: 'Telegu' }
     ],
     fn: setLanguage
   },
    {
      title: 'Handwriting Style',
      ddValue:[
        { value: '0', label: '-Select-' },
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'THree' },
        { value: '4', label: 'Four' }
      ],
      fn: setHandwritting
   }
  ]


  return (
    
    <form className='tihlc-std-form' ref={counterEl}>
          <div className='form-row'>
            <div className='col-12 title-wrap'>
              <h3>Style your letter</h3>
          </div>
        {
          DDList.map((item) => 
            <div className='form-group col-md-4 lang-container'>
              <label className='col-form-label'>
               {item.title}
              </label>
              <Dropdown options={item.ddValue} value={item.ddValue[0].value} onChange={(e) => { item.fn(e) }}/>
            </div>
          )
          }

            

            <div className='form-group col-md-4'>
              <label className='col-form-label template-design-main-label'>Template Design</label>
              {
              [...Array(4)].map((e, i) =>
              <>
              <input
                    type='radio'
                    checked
                    name='temp-design'
                    className='form-check-input template-radio form-control'
                    id={`temp${i}`}
                    
              />
              <label htmlFor={`temp${i}`} onClick = {()=>{setTemplate(i)}}>
                <img src={templatePlaceHolderImg} alt='Template Design' />
              </label>
              </>
              )
            }
            </div>

            <div className='form-group col-md-4'>
              <label className='col-form-label'>Additional Notes</label>
          <textarea className='form-control additional-notes' onChange={ (e)=>{setNotes(e)}}></textarea>
            </div>
            <div className='col-12 yellow-saperator border border-warning'></div>
            <div className='col-12'>
              <h3>Compose your letter</h3>
            </div>
            <div className="col-12">
              <div className="row no-gutters">
                <div className='col-12 col-md-6 order-1 order-md-0 mb-3 mb-md-0'>
                  <button type='button' className='btn btn-primary blue-btn'>
                    Use Default Message
                  </button>
                </div>
                <div className='col-12 col-md-6 order-0 order-md-1'>
                  <div className='row no-gutters'>
                    <div className='col-6'>
                      <p className='word-count-sp'>
                        TotaL words Counts is <span>100</span>
                      </p>
                      <p className='word-charge-sp'>
                        For each word we charge{" "}
                        <span>
                          <i className='fa fa-inr'></i> 1
                        </span>
                      </p>
                    </div>
                    <div className='col-6'>
                      <div className='subtotal-wrap'>
                        <div>
                          <p>Subtotal</p>
                        </div>
                        <div className='currency-container'>
                          <p>
                            <i className='fa fa-inr'></i> 100
                          </p>
                        </div>
                      </div>
                      <p className='change-currency'>
                        <a href='#'>Price in USD</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <textarea className='form-control write-to' onChange={ (e)=>{setWordCount(e)}} ></textarea>
            </div>
            <div className='col-md-12 next-btn-container'>
              <button className='btn btn-primary blue-btn' onClick={(e) =>{ e.preventDefault(); sendRecipients()}}>
                Add Recipients
              </button>
            </div>
          </div>
        </form>
      
  );
};

export default LetterMessage;
