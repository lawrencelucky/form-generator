import React from 'react';

import './FormTextarea.css';

function FormTextarea({ label, handleChange, value }) {
  return (
    <div className='formTextarea'>
      <label>{label}</label> <br />
      <textarea
        onChange={handleChange}
        cols='30'
        rows='3'
        value={value}
      ></textarea>
    </div>
  );
}

export default FormTextarea;
