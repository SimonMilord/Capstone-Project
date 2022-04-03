import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./watchlist.scss";
import StockItem from "../StockItem/stockItem";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';

let clientAuthToken = sessionStorage.getItem("clientAuthToken");
const serverURL = process.env.REACT_APP_SERVER_URL;

export default function Watchlist(props) {
  const [currentWatchlist, setcurrentWatchlist] = useState([]);

  useEffect(() => {
    getWatchlist();
  }, []);

  function getWatchlist() {
    axios
      .get(`${serverURL}/watchlist`, {
        headers: {
          authorization: `Bearer ${clientAuthToken}`,
        },
      })
      .then((response) => {
        setcurrentWatchlist(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteStock(stockQuote) {
    axios.put(`${serverURL}/watchlist/${stockQuote.symbol}`,
        {
          symbol: stockQuote.symbol,
          name: stockQuote.name
        }, {
          headers: {
            authorization: `Bearer ${clientAuthToken}`,
          }
        }
      )
      .then((response) => {
        setcurrentWatchlist(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="watchlist">
      <div className="watchlist-top">
        <h1 className="watchlist__title">Watchlist</h1>
        <Link to="/" className="watchlist__link">
          <div className="watchlist__btn">
            <AddIcon style={{ fill: 'white' }} />
            <p className="watchlist__textBtn">Add to watchlist</p>
          </div>
        </Link>
      </div>
      <div className="labels">
        <div className="labels__left">
          <div className="labels__item labels__item--ticker">
            <h2>Symbol</h2>
          </div>
          <div className="labels__item labels__item--name">
            <h2>Name</h2>
          </div>
        </div>
        <div className="labels__right">
          <div className="labels__item labels__item--price">
            <h2>Price</h2>
          </div>
          <div className="labels__item labels__item--change">
            <h2>Change (%)</h2>
          </div>
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
