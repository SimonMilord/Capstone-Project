import React from 'react';
import "./timeSelector.scss";

export default function TimeSelector() {

  return (
      <div className='time'>
        <div className='time__container'>
          <button className='time__btn'>1Y</button>
          <button className='time__btn'>3Y</button>
          <button className='time__btn'>5Y</button>
        </div>
      </div>
    );
  }
