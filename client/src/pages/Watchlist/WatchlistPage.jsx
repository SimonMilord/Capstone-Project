import React, { Component } from 'react';
import "./WatchlistPage.scss";
import Watchlist from '../../components/Watchlist/watchlist';
import NavBar from '../../components/NavBar/navBar';
import Footer from '../../components/Footer/footer';

export default class WatchlistPage extends Component {

  state = {
    userWatchlist: [],
  }

  render() {

    return (
      <>
        <NavBar />
        <div className='watchlistPage'>
          <Watchlist
            watchlist = {this.state.userWatchlist}
          />
        </div>
        <Footer />
      </>
    );
  }
}

