import React from 'react';
import './navBar.scss';
import { Link} from "react-router-dom";
import Logo from "../../assets/Logo/stonkers-logo.png";
import SearchIcon from '@mui/icons-material/Search';


export default function NavBar(props) {
  return (
    <div className='navBar'>
      <div className='nav'>
        <div className='nav__left'>
          <Link to="/" className='nav__logo'><img className='nav__img' src={Logo} alt="stonkers logo"></img></Link>
          <Link to="/" className="nav__link nav__link--home">Home</Link>
          <Link to="/watchlist" className="nav__link nav__link--watchlist" >Watchlist</Link>
        </div>
        <Link to="/login" className="nav__link nav__link--signout" >Sign out</Link>
      </div>
      <div className='navBar-bottom'>
        <div className='search'>
          <SearchIcon color="action"/>
          <input className="search__input" type="text" name="" placeholder='Search...' />
        </div>
        <div className='btns'>
          <Link to="/" className="btns__link btns__link--home">Home</Link>
          <Link to="/watchlist" className="btns__link btns__link--watchlist" >Watchlist</Link>
        </div>
      </div>
    </div>
  );
}