import React, { useState } from 'react';

import './FormGenerator.css';

import FormInput from './../FormInput/FormInput';
import FormSelect from './../FormSelect/FormSelect';
import FormTextarea from './../FormTextarea/FormTextarea';

const now = new Date();

function FormGenerator({ form }) {
  const [textInput, setTextInput] = useState('');
  const [dropdownInput, setDropdownInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [dateInput, setDateInput] = useState(now.toISOString().slice(0, 10));

  const isFormEmpty = () => {
    return (
      !textInput.length ||
      !dropdownInput.length ||
      !descriptionInput.length ||
      !numberInput.length ||
      !dateInput.length
    );
  };

  const handleSubmit = e => {
    if (isFormEmpty()) {
      e.preventDefault();
      alert('Fill all the form');
    } else {
      alert('Form Submitted');
    }
  };

  return (
    <div className='formGenerator'>
      <form onSubmit={handleSubmit}>
        {form.map((input, index) => {
          switch (input.type) {
            case 'number':
              return (
                <FormInput
                  type={input.type}
                  value={numberInput}
                  label={input.label}
                  handleChange={e => setNumberInput(e.target.value)}
                  key={index}
                />
              );
            case 'date':
              return (
                <FormInput
                  type={input.type}
                  value={dateInput}
                  label={input.label}
                  handleChange={e => setDateInput(e.target.value)}
                  key={index}
                />
              );
            case 'dropdown':
              return (
                <FormSelect
                  type={input.type}
                  label={input.label}
                  options={input.options}
                  handleChange={e => {
                    setDropdownInput(e.target.value);
                  }}
                  key={index}
                />
              );
            case 'description':
              return (
                <FormTextarea
                  type={input.type}
                  label={input.label}
                  handleChange={e => setDescriptionInput(e.target.value)}
                  key={index}
                  value={descriptionInput}
                />
              );
            default: {
              return (
                <FormInput
                  type={input.type}
                  value={textInput}
                  label={input.label}
                  handleChange={e => setTextInput(e.target.value)}
                  key={index}
                />
              );
            }
          }
        })}
        <button className='formGenerator__button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormGenerator;
