import React, { Component } from "react";
import "./stockItem.scss";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

export default class StockItem extends Component {
  state = {
    stockQuote: {},
  };

  componentDidMount() {
    this.getPrice(this.props.symbol);
  }

  getPrice(symbol) {
    axios
      .get(`${URL}/quote?symbol=${symbol}&token=${KEY}`)
      .then((res) => {
        this.setState({
          stockQuote: res.data,
        });
        console.log("fetched quote");
      })
      .catch((err) => {
        console.error(err);
        alert(
          "Hi!, Please note the current version only supports US stocks for now."
        );
        this.setState({
          stockQuote: {
            c: "N/A",
            d: null,
            dp: null,
            h: null,
            l: null,
            pc: null,
          },
        });
      });
  }

  deleteStock = (e) => {
    console.log(e.target.value);
    this.props.deleteItem(e.target.value);
  }

  render() {
    const data = this.state.stockQuote;
    return (
      <div className="stock">
        <div className="stock-box">
          <div className="stock__left">
            <p className="stock__data stock__data--ticker">
              {this.props.symbol}
            </p>
            <p className="stock__data stock__data--name">{this.props.name}</p>
          </div>
          <div className="stock__right">
            <div className="stock__data stock__data--price">
              ${Number(data.c).toFixed(2)}
            </div>
            <div
              className={
                data.dp > 0
                  ? "stock__data stock__data--up"
                  : "stock__data stock__data--down"
              }
            >
              {Number(data.dp).toFixed(2)}%
            </div>
          </div>
        </div>
        <button className="stock__delBtn" type="submit" value={this.props.symbol} onClick={this.deleteStock}>
          X
        </button>
      </div>
    );
  }
}
