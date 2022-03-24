import React from 'react';
import './stockItem.scss';

export default function StockItem(props) {
  return (
    <div className='stock'>
      <div className='stock-box'>
        <div className='stock__left'>
          <p className='stock__data stock__data--ticker'>AAPL</p>
          <p className='stock__data stock__data--name'>Apple Inc.</p>
        </div>
        <div className='stock__right'>
          <div className='stock__data stock__data--price'>$171.13</div>
          <div className='stock__data stock__data--var'>0.50%</div>
        </div>
      </div>
        <button className="stock__delBtn" type="submit">X</button>
    </div>
  );
}