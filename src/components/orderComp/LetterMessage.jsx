import React, { useState, useRef } from "react";
import templatePlaceHolderImg from "@Images/template-placeholder.png";
import PersonalService from '@Services/personalService';
import Dropdown from 'react-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import 'react-dropdown/style.css';

const LetterMessage = (props) => {
  const { CustomerId } = useSelector(
    ({ AuthReducers }) => AuthReducers.newUserInfo ? AuthReducers.newUserInfo : AuthReducers.userInfo
  );
  const [personalMessage, setpersonalMessage] = useState({OccassionId:'', LanguageId:'', HandwritingId:'', DesignTemplateId: '',CustomerID: CustomerId})
  const counterEl = useRef(null)
  const sendRecipients = async ()=>{
    
    setpersonalMessage({
      ...personalMessage,
      OccassionId: counterEl.current.querySelector('.occasion-container .Dropdown-control .is-selected').innerHTML,
      LanguageId: counterEl.current.querySelector('.lang-container .Dropdown-control .is-selected').innerHTML,
      HandwritingId: counterEl.current.querySelector('.hStyle-container .Dropdown-control .is-selected').innerHTML,
      CustomerID: CustomerId
    })
    let result = await PersonalService.addPersonalMessage(personalMessage);
  }

  const occasion = [
      { value: '0', label: '-Select-' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
      { value: '4', label: 'Four' }
  ];
  const defaultOption = occasion[0];
  const language = [
      { value: '0', label: '-Choose Language-' },
      { value: 'Kannada', label: 'Kannada' },
      { value: 'English', label: 'English' },
      { value: 'Hindi', label: 'Hindi' },
      { value: 'Telegu', label: 'Telegu' }
  ];
  const defaultLanguage = language[0];
  const handWriting = [
      { value: '0', label: '-Select-' },
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'THree' },
      { value: '4', label: 'Four' }
  ];
  const defaultHandWriting = handWriting[0];
  return (
    
        <form className='tihlc-std-form' ref={counterEl}>
          <div className='form-row'>
            <div className='col-12 title-wrap'>
              <h3>Style your letter</h3>
            </div>
            <div className='form-group col-md-4 occasion-container'>
              <label htmlFor='occasion' className='col-form-label'>
                Occasion
              </label>
              <Dropdown 
              options={occasion} value={defaultOption}  
             />
              {/* <select className='form-control'>
                <option selected>-Select-</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select> */}
                </div>

            <div className='form-group col-md-4 lang-container'>
              <label htmlFor='language' className='col-form-label'>
                Choose Language
              </label>              
              <Dropdown options={language} value={defaultLanguage} />
              {/* <select className='form-control'>
                <option selected>-Select-</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select> */}
            </div>

            <div className='form-group col-md-4 hStyle-container'>
              <label htmlFor='handWriting' className='col-form-label'>
                Handwriting Style
              </label>           
              <Dropdown options={handWriting} value={defaultHandWriting} />
              {/* <select className='form-control'>
                <option selected>-Select-</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select> */}
            </div>

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
              <label htmlFor={`temp${i}`}>
                <img src={templatePlaceHolderImg} alt='Template Design' />
              </label>
              </>
              )
            }
            </div>

            <div className='form-group col-md-4'>
              <label className='col-form-label'>Additional Notes</label>
              <textarea className='form-control additional-notes'></textarea>
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
              <textarea className='form-control write-to'></textarea>
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
