import React from 'react';

import './FormInput.css';

function FormInput({ label, handleChange, ...otherProps }) {
  return (
    <div className='formInput'>
      <label>{label}</label> <br />
      <input onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default FormInput;
