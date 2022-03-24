import React from 'react';
import './quote.scss';

export default function Quote(props) {
  return (
    <div className='quote'>
      <div className='quote__top'>
        <div className='quote__company'>
          <div className='quote__ticker'>AAPL - <span className='quote__exchange'>NYSE</span></div>
          <div className='quote__name'>Apple Inc.</div>
        </div>
        <div className='quote__btn'>
          <button className='quote__addBtn' type="submit">Add to watchlist</button>
        </div>
      </div>
      <div className='quote__bottom'>
        <p className='quote__price'>$171.13</p>
        <p className='quote__var quote__var--perc'>0.50%</p>
        <p className='quote__var quote__var--doll'>+0.84</p>
      </div>
    </div>
  );
}