import React from 'react';

import FormHeader from './../../components/FormHeader/FormHeader';
import FormGenerator from './../../components/FormGenerator/FormGenerator';

function FormPage() {
  const form = [
    {
      label: 'What is the name of the officer in question?',
      type: 'text',
    },
    {
      label: 'When was the date of the incident?',
      type: 'date',
    },
    {
      label: 'How much is the bribe that was paid? (optional)',
      type: 'number',
    },
    {
      label: 'Type of cars',
      type: 'dropdown',
      options: ['cars', 'bikes', 'buses', 'aeroplanes'],
    },
    {
      label: 'Describe what you experienced.',
      type: 'description',
    },
  ];

  return (
    <div>
      <FormHeader title='The Police Brutality Form' />

      <FormGenerator form={form} />
    </div>
  );
}
export default FormPage;
