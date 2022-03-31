import React from "react";
import "./navBar.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/stonkers-logo.svg";
import SearchIcon from "@mui/icons-material/Search";

export default function NavBar(props) {

  const handleSubmit = (e) => {
    props.getQuote(e.target.searchedStock.value.toUpperCase());
    e.preventDefault();
    e.target.searchedStock.value = "";
  };

  const handleSignout = (e) => {
    sessionStorage.clear();
  }

  return (
    <div className="navBar">
      <div className="nav">
        <div className="nav__left">
          <NavLink to="/" className="nav__logo">
            <img className="nav__img" src={Logo} alt="stonkers logo"></img>
          </NavLink>
          <NavLink to="/" className="nav__link nav__link--home" tabIndex={1}>
            Home
          </NavLink>
          <NavLink
            to="/watchlist"
            className="nav__link nav__link--watchlist"
            tabIndex={2}
          >
            Watchlist
          </NavLink>
        </div>
        <NavLink
          to="/login"
          className="nav__link nav__link--signout"
          tabIndex={3}
          onClick={handleSignout}
        >
          Sign out
        </NavLink>
      </div>
      <div className="navBar-bottom">
        <div className="search">
          <SearchIcon color="action" />
          <form
            className="search__form"
            onSubmit={handleSubmit}
          >
            <input
              className="search__input"
              type="text"
              name="searchedStock"
              tabIndex={4}
              placeholder="Search for stocks..."
            />
          </form>
        </div>
        <div className="btns">
          <NavLink to="/" className="btns__link btns__link--home">
            Home
          </NavLink>
          <NavLink to="/watchlist" className="btns__link btns__link--watchlist">
            Watchlist
          </NavLink>
        </div>
      </div>
    </div>
  );
}
