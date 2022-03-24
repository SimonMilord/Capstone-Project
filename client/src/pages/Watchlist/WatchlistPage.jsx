import React, { Component } from 'react';
import "./WatchlistPage.scss";
import Watchlist from '../../components/Watchlist/watchlist';
import NavBar from '../../components/NavBar/navBar';

export default class WatchlistPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className='watchlistPage'>
          <Watchlist />
        </div>
      </>
    );
  }
}

