import React from 'react';
import './navBar.scss';
import { Link} from "react-router-dom";
import Logo from "../../assets/Logo/stonkers-logo.png";
import SearchIcon from '@mui/icons-material/Search';


export default function NavBar(props) {
  return (
    <div className='navBar'>
      <div className='logo'>
        <Link to="/"><img className='logo__img' src={Logo} alt="stonkers logo"></img></Link>
        <h1 className='logo__title'>Stonkers</h1>
      </div>
      <div className='search'>
        <input className="search__input" type="text" name="" placeholder='Search...' />
        <SearchIcon color="action"/>
      </div>
      <div className='btns'>
        <Link to="/watchlist" className="btns__link btns__link--watchlist" >Watchlist</Link>
        <Link to="/login" className="btns__link btns__link--logout">Sign out</Link>
      </div>
    </div>
  );
}