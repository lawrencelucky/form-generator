import React from 'react';

function FormSelect({ label, options, value, handleChange }) {
  return (
    <div className='formSelect'>
      <label>{label}</label>
      <select onChange={handleChange}>
        <option value=''>--|--</option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
