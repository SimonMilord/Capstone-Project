import React from "react";
import "./quote.scss";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';

export default function Quote(props) {

  // capitalizes the company name
  const formatName = (param) => {
    let rawCompanyName = param.toLowerCase();
    let formattedCompanyName = rawCompanyName.charAt(0).toUpperCase() + rawCompanyName.slice(1);
    return formattedCompanyName;
  }
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
  // handler function to add stock to watchlist
  const addStock = () => {
    props.addBtn();
  }

  return (
    <div className="quote">
      <div className="quote__top">
        <div className="quote__company">
          <div className="quote__ticker">
            <div className="quote__symbol">
            {props.symbol}&nbsp;-&nbsp;
            </div>
            <div className="quote__name">
             {formatName(props.name)}
            </div>
          </div>
            <div className="quote__exchange">{findExchange(props.profile.exchange)}</div>
        </div>
        <div className="quote__btn" onClick={addStock}>
          <AddIcon style={{ fill: 'white' }} />
          <p className="quote__textBtn">Add to watchlist</p>
        </div>
      </div>
      <div className="quote__bottom">
        <div className="quote__price">${Number(props.quote.c).toFixed(2)} (USD)</div>
        <div className={props.quote.dp > 0 ? "quote__var" : "quote__var--down"}>
          {props.quote.d > 0 ? <ArrowUpwardIcon style={{ fill: 'green' }} fontSize="small"/> : <ArrowDownwardIcon style={{ fill: 'red' }} fontSize="small"/> }
          {Number(props.quote.dp).toFixed(2)}%
        </div>
        <div className={props.quote.dp > 0 ? "quote__var" : "quote__var--down"}>
          {props.quote.d > 0 ? <ArrowUpwardIcon style={{ fill: 'green' }} fontSize="small"/> : <ArrowDownwardIcon style={{ fill: 'red' }} fontSize="small"/> }
          {Number(props.quote.d).toFixed(2)}
        </div>
      </div>
    </div>
  );
}
