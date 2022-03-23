import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <MainPage {...routerProps} />}
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
