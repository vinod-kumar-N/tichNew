import React, { useState } from 'react';
import './style.scss';

const FormInput = (props) => {
  const { label, type, placeholder, onChange, value, name } = props;
  const [tempType, setType] = useState(type);
  const changeType = () => {
    tempType === 'password' ? setType('text') : setType('password');
  };
  return (
    <div className="form-input-wrapper">
      <label>
        <span className="input-label">{label}</span>
        <input
          type={tempType}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={name}
        />
        {type === 'password' ? (
          <span className="show-password" onClick={changeType}>
            @
          </span>
        ) : null}
      </label>
    </div>
  );
};

export default FormInput;
