import React from 'react';

import './form-input.styles.scss';


const FromInput = ({handleChange , label, ...OtherProps}) =>
(
  <div className="group">
      <input className='form-input' onChange={handleChange} {...OtherProps} />
      {label ? (
      <label 
      className={`${OtherProps.value.length ? 'shrink' : ''} form-input-label`}
      >
     {label}
      </label>
      )
      : null

      }
  </div>
)

export default FromInput;