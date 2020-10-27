import React from 'react';
import './FormHeader.css';

function FormHeader({ title }) {
  return (
    <div className='formHeader'>
      <h1>{title}</h1>
    </div>
  );
}

export default FormHeader;
