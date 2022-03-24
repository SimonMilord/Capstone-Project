import React, { Component } from 'react';
import './MainPage.scss';
import NavBar from '../../components/NavBar/navBar';
import Quote from "../../components/Quote/quote";
import Graph from "../../components/Graph/graph";
import DataTable from "../../components/DataTable/dataTable";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className='mainPage'>
          <div className='mainPage-top'>
            <Quote />
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
