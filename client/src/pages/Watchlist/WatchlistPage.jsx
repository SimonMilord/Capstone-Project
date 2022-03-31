import React, { Component } from 'react';
import "./WatchlistPage.scss";
import Watchlist from '../../components/Watchlist/watchlist';
import NavBar from '../../components/NavBar/navBar';

export default class WatchlistPage extends Component {

  state = {
    // userWatchlist: [],
    userWatchlist: [
      {
        id: "1",
        symbol: "AAPL",
        name: "Apple Inc."
      },
      {
        id: "2",
        symbol: "GOOG",
        name: "Alphabet Inc."
      },
      {
        id: "3",
        symbol: "MSFT",
        name: "Microsoft Inc."
      },
      {
        id: "4",
        symbol: "ACN",
        name: "Accenture Inc."
      },
      {
        id: "5",
        symbol: "CSGP",
        name: "Costar Inc."
      }
    ],
  }

  // NEED function to fetch a user watchlist from the DB and set it in the state


  render() {

    return (
      <>
        <NavBar />
        <div className='watchlistPage'>
          <Watchlist
            watchlist = {this.state.userWatchlist}
          />
        </div>
      </>
    );
  }
}

