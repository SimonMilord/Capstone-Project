import React, { Component } from 'react';
import "./WatchlistPage.scss";
import Watchlist from '../../components/Watchlist/watchlist';
import NavBar from '../../components/NavBar/navBar';
import FooterMain from '../../components/Footer/footerMain';


export default class WatchlistPage extends Component {

  state = {
    userWatchlist: [],
    searchedQuote: ""
  }

  // wraps the setState in a promise to use async/await
  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }


  handleRedirect = async(quote) => {
    await this.setStateAsync({
      searchedQuote: quote,
    }, () => {
      this.props.getSearchedQuote(this.state.searchedQuote);
    });
  }


  render() {
    return (
      <>
        <NavBar redirect={this.handleRedirect}/>
        <div className='watchlistPage'>
          <Watchlist
            watchlist = {this.state.userWatchlist}
          />
        </div>
        <FooterMain />
      </>
    );
  }
}

