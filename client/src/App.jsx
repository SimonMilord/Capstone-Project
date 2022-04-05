import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import WatchlistPage from "./pages/Watchlist/WatchlistPage";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/SignUp/SignUpPage";

export default class App extends Component {
  state = {
    searchedQuote: "",
  };

  handleSearchedQuote = (quote) => {
    this.setState({
      searchedQuote: quote,
    });
    console.log(this.state.searchedQuote + "in app.js");
  };

  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => (
                  <MainPage
                    {...routerProps}
                    searchedQuote={this.state.searchedQuote}
                  />
                )}
              />
              <Route
                path="/main"
                render={(routerProps) => <MainPage {...routerProps} />}
              />
              <Route
                path="/login"
                exact
                render={(routerProps) => <LoginPage {...routerProps} />}
              />
              <Route
                path="/signup"
                exact
                render={(routerProps) => <SignUpPage {...routerProps} />}
              />
              <Route
                path="/watchlist"
                render={(routerProps) => (
                  <WatchlistPage
                    {...routerProps}
                    getSearchedQuote={this.handleSearchedQuote}
                  />
                )}
              />

              <Route
                path="/github"
                component={() => {
                  window.location.replace("https://github.com/SimonMilord");
                  return null;
                }}
              />
              <Route
                path="/linkedin"
                component={() => {
                  window.location.replace(
                    "https://www.linkedin.com/in/simonmilord/"
                  );
                  return null;
                }}
              />
              <Route
                path="*"
                render={(routerProps) => <MainPage {...routerProps} />}
              />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
