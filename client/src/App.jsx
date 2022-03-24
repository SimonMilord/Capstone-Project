import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import Footer from "./components/Footer/footer";
import WatchlistPage from "./pages/Watchlist/WatchlistPage";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/SignUp/SignUpPage";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <MainPage {...routerProps} />}
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
                render={(routerProps) => <WatchlistPage {...routerProps} />}
              />
              {/* IN CASE I MAKE IT POSSIBLE TO ADD MORE THAN 1 WATCHLIST */}
              {/* <Route
                path="/watchlist/:id"
                render={(routerProps) => <WatchlistPage {...routerProps} />}
              /> */}

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
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}
