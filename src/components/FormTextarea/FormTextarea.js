import React from 'react';

function FormTextarea({ label, handleChange, value }) {
  return (
    <div>
      <label>{label}</label>
      <textarea
        onChange={handleChange}
        cols='30'
        rows='5'
        value={value}
      ></textarea>
    </div>
  );
}

export default FormTextarea;
