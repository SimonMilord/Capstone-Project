import React from "react";
import "./quote.scss";

export default function Quote(props) {

  // Converts the exchange name to their accronyms
  const findExchange = (param) => {
    switch(param) {
      case 'NEW YORK STOCK EXCHANGE, INC.':
        return 'NYSE'
      case 'NASDAQ NMS - GLOBAL MARKET':
        return 'NASDAQ'
      case 'TORONTO STOCK EXCHANGE':
        return 'TSX'
      default:
        return 'N/A'
    }
  }

  return (
    <div className="quote">
      <div className="quote__top">
        <div className="quote__company">
          <div className="quote__ticker">
            {props.symbol} -{" "}
            <span className="quote__exchange">{findExchange(props.profile.exchange)}</span>
          </div>
          <div className="quote__name">{props.name}</div>
        </div>
        <div className="quote__btn">
          <button className="quote__addBtn" type="submit">
            Add to watchlist
          </button>
        </div>
      </div>
      <div className="quote__bottom">
        <p className="quote__price">${props.quote.c} (USD)</p>
        <p className={props.quote.dp > 0 ? "quote__var" : "quote__var--down"}>
          {Number(props.quote.dp).toFixed(2)}%
        </p>
        <p className={props.quote.dp > 0 ? "quote__var" : "quote__var--down"}>
          {Number(props.quote.d).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
