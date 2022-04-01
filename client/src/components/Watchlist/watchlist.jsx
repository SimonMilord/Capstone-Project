import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import "./watchlist.scss";
import StockItem from "../StockItem/stockItem";
import axios from "axios";

let clientAuthToken = sessionStorage.getItem('clientAuthToken');
const serverURL = process.env.REACT_APP_SERVER_URL;

export default function Watchlist(props) {

  const [currentWatchlist, setcurrentWatchlist] = useState([]);

  useEffect(() => {
    getWatchlist();
  }, [])

  function getWatchlist() {
    axios
    .get(`${serverURL}/watchlist`, {
      headers: {
        authorization: `Bearer ${clientAuthToken}`
      }}
    )
    .then((response) => {
      setcurrentWatchlist(response.data);
    })
    .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteStock(symbol) {
    axios
      .put(`${serverURL}/watchlist/${symbol}`, {
        headers: {
          authorization: `Bearer ${clientAuthToken}`,
        }}, {
          symbol: symbol,
        }
      ).then((response) => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="watchlist">
      <div className="watchlist-top">
        <h1 className="watchlist__title">Watchlist</h1>
        <Link to="/">
          <button className="watchlist__addBtn" type="button">
            Add to watchlist
          </button>
        </Link>
      </div>
      <div className="labels">
        <div className="labels__item">
          <h2>Symbol</h2>
        </div>
        <div className="labels__item">
          <h2>Name</h2>
        </div>
        <div className="labels__item">
          <h2>Price</h2>
        </div>
        <div className="labels__item">
          <h2>Change (%)</h2>
        </div>
      </div>
      <ul className="watchlist__list">
        {currentWatchlist &&
          currentWatchlist.map((stockItem) => (
            <li className="watchlist__item" key={stockItem._id}>
              <StockItem
                symbol={stockItem.symbol}
                name={stockItem.name}
                deleteItem={handleDeleteStock}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}