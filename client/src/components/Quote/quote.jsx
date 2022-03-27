import React from 'react';
import './quote.scss';

export default function Quote(props) {
  return (
    <div className='quote'>
      <div className='quote__top'>
        <div className='quote__company'>
          <div className='quote__ticker'>{props.symbol} - <span className='quote__exchange'>NYSE</span></div>
          <div className='quote__name'>{props.name}</div>
        </div>
        <div className='quote__btn'>
          <button className='quote__addBtn' type="submit">Add to watchlist</button>
        </div>
      </div>
      <div className='quote__bottom'>
        <p className='quote__price'>${props.quote.c}</p>
        <p className='quote__var quote__var--perc'>{props.quote.dp.toFixed(2)}%</p>
        <p className='quote__var quote__var--doll'>{props.quote.d.toFixed(2)}</p>
      </div>
    </div>
  );
}