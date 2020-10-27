import React from 'react';

function FormInput({ label, handleChange, ...otherProps }) {
  return (
    <div>
      <label>{label}</label>
      <input onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default FormInput;
