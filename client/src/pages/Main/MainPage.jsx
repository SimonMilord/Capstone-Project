import "./MainPage.scss";
import React, { Component } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/navBar";
import Quote from "../../components/Quote/quote";
import Graph from "../../components/Graph/graph";
import DataTable from "../../components/DataTable/dataTable";

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;
const defaultStock = "AAPL";

export default class MainPage extends Component {
  state = {
    stock: defaultStock,
    stockName: "APPLE INC",
    stockQuote: {},
    stockFinancials: {},
    stockProfile: {},
    stockNews: {},
    stockRatings: {},
    stockRecommendation: "",
    stockChartData: {},
  };

  // Life cycle methods
  componentDidMount() {
    // console.log("component mounted");
    this.getStockQuote(defaultStock);
    this.getStockName(defaultStock);
    this.getStockFinancials(defaultStock);
    this.getStockProfile(defaultStock);
    this.getStockRatings(defaultStock);
    this.getStockPriceData(defaultStock); // Data required for the chart
  }

  // functions that call API request functions once a stock is searched
  handleQuoteData = (quote) => {
    this.getStockName(quote);
    this.getStockQuote(quote);
    this.getStockFinancials(quote);
    this.getStockProfile(quote);
    this.getStockRatings(quote);
    this.getStockPriceData(quote); // Data required for the chart
  };

  // API call to get Name and symbol of the company
  getStockName(symbol) {
    axios
      .get(`${URL}/search?q=${symbol}&token=${KEY}`)
      .then((res) => {
        this.setState({
          stockName: res.data.result[0].description,
          stock: res.data.result[0].symbol,
        });
        // console.log('fetched name');
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // API call to get current price, percent change and $ change
  getStockQuote(symbol) {
    axios
      .get(`${URL}/quote?symbol=${symbol}&token=${KEY}`)
      .then((res) => {
        this.setState({
          stockQuote: res.data,
        });
        // console.log('fetched quote');
      })
      .catch((err) => {
        // console.error(err);
        alert(
          "Hi!, Please note the current version only supports US stocks for now."
        );
        this.setState({
          stockQuote: {
            "c": "N/A",
            "d": null,
            "dp": null,
            "h": null,
            "l": null,
            "pc": null,
          }
        });
      });
  }

  // API call to get financials data
  getStockFinancials(symbol) {
    axios
      .get(`${URL}/stock/metric?symbol=${symbol}&metric=all&token=${KEY}`)
      .then((res) => {
        this.setState({
          stockFinancials: res.data,
        });
        // console.log('fetched financials');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // API call to get company profile data
  getStockProfile(symbol) {
    axios
      .get(`${URL}/stock/profile2?symbol=${symbol}&token=${KEY}`)
      .then((res) => {
        this.setState({
          stockProfile: res.data,
        });
        // console.log('fetched profile');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // API call to get stock analysts ratings data and sets a recommendation value
  getStockRatings(symbol) {
    axios
      .get(`${URL}/stock/recommendation?symbol=${symbol}&token=${KEY}`)
      .then((res) => {
        this.setState({
          stockRatings: res.data[0],
        });
        // console.log('fetched recommendations');
        // cleaning up the array of analyst ratings and
        // aggregating values for readability
        let arr = Object.values(this.state.stockRatings);
        arr.splice(2, 1);
        arr.pop();
        let buys = arr[0] + arr[3];
        let hold = arr[1];
        let sells = arr[2] + arr[4];

        // Basic algorithm to come up with a final recommendation
        if (buys > arr[1] + hold + sells) {
          this.setState({
            stockRecommendation: "BUY",
          });
        } else if (buys + hold < sells) {
          this.setState({
            stockRecommendation: "SELL",
          });
        } else {
          this.setState({
            stockRecommendation: "HOLD",
          });
        }
      })
      .catch((err) => {
        // console.error(err);
        this.setState({
          stockRecommendation: "N/A",
        });
      });
  }

    // API call to get the 5 years stock price data for the chart
    getStockPriceData(symbol) {
      const from5 = 1616651622;
      const today = 1648187622;

      axios
        .get(`${URL}/stock/candle?symbol=${symbol}&resolution=D&from=${from5}&to=${today}&token=${KEY}`)
        .then((res) => {
          this.setState(() => ({
            stockChartData: res.data,
          }));
        })
        .catch((err) => {
          console.error(err);
        })
    }

  render() {
    document.title = this.state.stock
      ? `Stonkers - ${this.state.stock}`
      : "Stonkers";
    return (
      <>
        <NavBar getQuote={this.handleQuoteData} />
        <div className="mainPage">
          <div className="mainPage-top">
            <Quote
              symbol={this.state.stock}
              quote={this.state.stockQuote}
              name={this.state.stockName}
              profile={this.state.stockProfile}
            />
          </div>
          <div className="mainPage-bottom">
            <Graph
              chartData={this.state.stockChartData}
            />
            <DataTable
              quote={this.state.stockQuote}
              financials={this.state.stockFinancials}
              profile={this.state.stockProfile}
              recommendation={this.state.stockRecommendation}
            />
          </div>
        </div>
      </>
    );
  }
}
