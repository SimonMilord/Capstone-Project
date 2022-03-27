import React from "react";
import "./quote.scss";

export default function Quote(props) {
  return (
    <div className="quote">
      <div className="quote__top">
        <div className="quote__company">
          <div className="quote__ticker">
            {props.symbol} -{" "}
            <span className="quote__exchange">{props.profile.exchange}</span>
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
