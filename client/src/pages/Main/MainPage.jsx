import React, { Component } from 'react';
import './MainPage.scss';
import NavBar from '../../components/NavBar/navBar';
import Quote from "../../components/Quote/quote";
import Graph from "../../components/Graph/graph";
import DataTable from "../../components/DataTable/dataTable";

export default class MainPage extends Component {

  state = {
    selectedStock: "",
  }

  handleQuoteData = (quote) => {
    this.setState({selectedStock: quote})
  }

  render() {

    return (
      <>
        <NavBar getQuote = {this.handleQuoteData} />
        <div className='mainPage'>
          <div className='mainPage-top'>
            <Quote />
          </div>
          <div className='mainPage-bottom'>
            <h1>Searched: {this.state.selectedStock}</h1>
            <Graph />
            <DataTable />
          </div>
        </div>
      </>
    );
  }
}
