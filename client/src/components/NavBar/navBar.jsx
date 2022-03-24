import React from 'react';
import './navBar.scss';
import { Link, NavLink} from "react-router-dom";
import Logo from "../../assets/Logo/stonkers-logo.png";
import SearchIcon from '@mui/icons-material/Search';


export default function NavBar(props) {
  return (
    <div className='navBar'>
      <div className='nav'>
        <div className='nav__left'>
          <NavLink to="/" className='nav__logo'><img className='nav__img' src={Logo} alt="stonkers logo"></img></NavLink>
          <NavLink to="/" className="nav__link nav__link--home">Home</NavLink>
          <NavLink to="/watchlist" className="nav__link nav__link--watchlist" >Watchlist</NavLink>
        </div>
        <NavLink to="/login" className="nav__link nav__link--signout" >Sign out</NavLink>
      </div>
      <div className='navBar-bottom'>
        <div className='search'>
          <SearchIcon color="action"/>
          <input className="search__input" type="text" name="" placeholder='Search for stocks...' />
        </div>
        <div className='btns'>
          <NavLink to="/" className="btns__link btns__link--home">Home</NavLink>
          <NavLink to="/watchlist" className="btns__link btns__link--watchlist" >Watchlist</NavLink>
        </div>
      </div>
    </div>
  );
}