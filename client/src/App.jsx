import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import Footer from "./components/Footer/footer";
import WatchlistPage from './pages/Watchlist/WatchlistPage';

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
                path="/watchlist"
                exact
                render={(routerProps) => <WatchlistPage {...routerProps} />}
              />


              <Route path='/github' component={() => {
                window.location.replace('https://github.com/SimonMilord');
                return null;
              }}/>

              <Route path='/linkedin' component={() => {
                window.location.replace('https://www.linkedin.com/in/simonmilord/');
                return null;
              }}/>
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}
