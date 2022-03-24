import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.scss';
import Logo from '../../assets/Logo/stonkers-logo.png';

export default class LoginPage extends Component {
  render() {
    return (
      <div className='loginPage'>
        <div className='login'>
          <div className='login__logo'>
            <img className='login__img' src={Logo} alt="stonkers logo"></img>
            <h1 className='login__title'>Stonkers</h1>
          </div>
          <form className='login__form'>
            <input className='login__input login__input--username'
            name="username"
            placeholder='Username'>
            </input>
            <input className='login__input login__input--password'
            name="password"
            placeholder='Password'>
            </input>
            <button className='login__btn login__btn--login' type="submit" >Login</button>
            <Link to="/signup">Sign up</Link>
          </form>
        </div>
      </div>
    );
  }
}

