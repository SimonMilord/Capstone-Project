import React, { Component } from 'react';
import './MainPage.scss';
import Quote from "../../components/Quote/quote";
import Graph from "../../components/Graph/graph";
import DataTable from "../../components/DataTable/dataTable";

export default class MainPage extends Component {
  render() {
    return (
      <div className='mainPage'>
        <div className='mainPage-top'>
          <Quote />
        </div>
        <div className='mainPage-bottom'>
          <Graph />
          <DataTable />
        </div>
      </div>
    );
  }
}
