import './MainPage.scss';
import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/navBar';
import Quote from "../../components/Quote/quote";
import Graph from "../../components/Graph/graph";
import DataTable from "../../components/DataTable/dataTable";

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

export default class MainPage extends Component {

  state = {
    stock: "AAPL",
    stockName: "Apple Inc.",
    stockQuote: {},
    stockData: {},
    stockNews: {},
    stockRatings: {},
  }

  // Life cycle methods
  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    // console.log(prevState);
    // console.log(this.state.stockName);
    // if (prevState.stockName !== this.state.stockName) {
    //   this.getStockName();
    // }
  }

  handleQuoteData = (quote) => {
    this.getStockName(quote);
    this.getStockQuote(quote);
  }

  getStockName(symbol) {
    axios
      .get(`${URL}/search?q=${symbol}&token=${KEY}`)
      .then((res) => {
        this.setState({
          stockName: res.data.result[0].description,
          stock: res.data.result[0].symbol,
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  getStockQuote = (symbol) => {
    axios
      .get(`${URL}/quote?symbol=${symbol}&token=${KEY}`)
      .then((res) => {
        this.setState({
          stockQuote: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    document.title = this.state.stock ? `Stonkers - ${this.state.stock}` : "Stonkers";
    return (
      <>
        <NavBar
        getQuote = {this.handleQuoteData}
        getStockName = {this.getStockName}
        />
        <div className='mainPage'>
          <div className='mainPage-top'>
            <Quote
              quote = {this.state.stockQuote}
              name = {this.state.stockName}
              symbol = {this.state.stock}
              />
          </div>
          <div className='mainPage-bottom'>
            <Graph />
            <DataTable />
          </div>
        </div>
      </>
    );
  }
}
