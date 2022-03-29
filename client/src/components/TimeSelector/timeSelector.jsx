import React from 'react';
import "./timeSelector.scss";

export default function TimeSelector(props) {

  const handleClick = (e) => {
    const value = e.target.value;
    let period = null;

    // checks selection of time period and convert it to timestamp format
    if (value === '1') {
      period = (new Date().setFullYear(new Date().getFullYear() - 1)/1000).toFixed();
    } else if (value === '3') {
      period = (new Date().setFullYear(new Date().getFullYear() - 3)/1000).toFixed();
    } else {
      period = (new Date().setFullYear(new Date().getFullYear() - 5)/1000).toFixed();
    }
    props.getTime(period);
  }

  return (
      <div className='time'>
        <div className='time__container'>
          <button className='time__btn' value="1" onClick={handleClick}>1Y</button>
          <button className='time__btn' value="3" onClick={handleClick}>3Y</button>
          <button className='time__btn' value="5" onClick={handleClick}>5Y</button>
        </div>
      </div>
    );
  }


