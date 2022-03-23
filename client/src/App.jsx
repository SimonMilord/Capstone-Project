import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <h1>Stonkers test</h1>
            <NavBar />
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <MainPage {...routerProps} />}
              />

            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}
