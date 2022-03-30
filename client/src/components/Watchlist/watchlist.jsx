import React from 'react';
import { Link } from 'react-router-dom';
import './watchlist.scss';
import StockItem from '../StockItem/stockItem';

export default function Watchlist(props) {
  return (
    <div className='watchlist'>
      <div className='watchlist-top'>
        <h1 className='watchlist__title'>Watchlist</h1>
        <Link to="/">
          <button className='watchlist__addBtn' type="button">Add to watchlist</button>
        </Link>
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
        {props.watchlist && props.watchlist.map((stockItem) => (
          <li className='watchlist__item' key={stockItem.id}>
            <StockItem
              symbol = {stockItem.symbol}
              name = {stockItem.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

