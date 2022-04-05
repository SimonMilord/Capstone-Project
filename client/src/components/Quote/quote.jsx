import React from "react";
import "./quote.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Quote(props) {
  // Converts the exchange name to their accronyms
  const findExchange = (param) => {
    switch (param) {
      case "NEW YORK STOCK EXCHANGE, INC.":
        return "NYSE";
      case "NASDAQ NMS - GLOBAL MARKET":
        return "NASDAQ";
      case "TORONTO STOCK EXCHANGE":
        return "TSX";
      default:
        return "N/A";
    }
  };

  const addStock = () => {
    props.addBtn();
  };

  const delStock = () => {
    props.deleteBtn(props.symbol);
  };

  return (
    <div className="quote">
      <div className="quote__top">
        <div className="quote__company">
          <div className="quote__ticker">
            <div className="quote__symbol">
              {props.profile.ticker}&nbsp;-&nbsp;
            </div>
            <div className="quote__name">{props.profile.name}</div>
          </div>
          <div className="quote__exchange">
            {findExchange(props.profile.exchange)}
          </div>
        </div>
        {!props.inWatchlistStatus ? (
          <div className="quote__btn quote__btn--add" onClick={addStock}>
            <AddIcon style={{ fill: "white" }} />
            <p className="quote__textBtn">Add to watchlist</p>
          </div>
        ) : (
          <div className="quote__btn quote__btn--remove" onClick={delStock}>
            <RemoveIcon style={{ fill: "white" }} />
            <p className="quote__textBtn">Remove from watchlist</p>
          </div>
        )}
      </div>
      <div className="quote__bottom">
        <div className="quote__price">
          ${Number(props.quote.c).toFixed(2)} (USD)
        </div>
        <div className={props.quote.dp > 0 ? "quote__var" : "quote__var--down"}>
          {props.quote.d > 0 ? (
            <ArrowUpwardIcon style={{ fill: "green" }} fontSize="small" />
          ) : (
            <ArrowDownwardIcon style={{ fill: "red" }} fontSize="small" />
          )}
          {Number(props.quote.dp).toFixed(2)}%
        </div>
        <div className={props.quote.dp > 0 ? "quote__var" : "quote__var--down"}>
          {props.quote.d > 0 ? (
            <ArrowUpwardIcon style={{ fill: "green" }} fontSize="small" />
          ) : (
            <ArrowDownwardIcon style={{ fill: "red" }} fontSize="small" />
          )}
          {Number(props.quote.d).toFixed(2)}
        </div>
      </div>
    </div>
  );
}
