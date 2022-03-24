import React from 'react';
import './watchlist.scss';
import StockItem from '../StockItem/stockItem';

export default function Watchlist(props) {
  return (
    <div className='watchlist'>
      <div className='watchlist-top'>
        <h1 className='watchlist__title'>Watchlist</h1>
        <button className='watchlist__addBtn' type="submit">Add to watchlist</button>
      </div>
      <div className='labels'>
        <div className='labels__item'>
          <h2>Symbol</h2>
        </div>
        <div className='labels__item'>
          <h2>Name</h2>
        </div>
        <div className='labels__item'>
          <h2>Price</h2>
        </div>
        <div className='labels__item'>
          <h2>Change (%)</h2>
        </div>
      </div>
      <ul className='watchlist__list'>
        <li className='watchlist__item'>
          <StockItem />
        </li>
        <li className='watchlist__item'>
          <StockItem />
        </li>
      </ul>
    </div>
  );
}

