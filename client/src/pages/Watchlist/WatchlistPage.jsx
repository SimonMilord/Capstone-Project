import React, { Component } from "react";
import "./WatchlistPage.scss";
import Watchlist from "../../components/Watchlist/watchlist";
import NavBar from "../../components/NavBar/navBar";
import FooterMain from "../../components/Footer/footerMain";

export default class WatchlistPage extends Component {
  state = {
    userWatchlist: [],
    searchedQuote: "",
  };

  handleRedirect = async (quote) => {
    await this.setState(
      {
        searchedQuote: quote,
      },
      () => {
        this.props.getSearchedQuote(this.state.searchedQuote);
      }
    );
  };

  render() {
    document.title = "Watchlist";
    return (
      <>
        <NavBar redirect={this.handleRedirect} />
        <div className="watchlistPage">
          <Watchlist watchlist={this.state.userWatchlist} />
        </div>
        <FooterMain />
      </>
    );
  }
}
