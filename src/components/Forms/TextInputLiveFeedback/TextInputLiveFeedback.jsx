import React, { useState } from 'react';
import {useField } from 'formik';


// import './TextInputLiveFeedback.module.css'


export const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div className={`form-control items-center space-between ${
        showFeedback ? (meta.error ? 'error' : 'success') : ''
      }`}
    >
      {/* <div className="flex items-center space-between"> */}

      <label htmlFor={props.id}>{label}
        <input
          className={`${
            showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
          }`}        
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
        />
      </label>

      { showFeedback && (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="my-feedback text-sm"
          >
            {meta.error ?? '✓'}
          </div>
      ) }

      {/* </div> */}
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};
