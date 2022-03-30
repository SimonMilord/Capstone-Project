import React, { Component } from 'react';
import "./SignUpPage.scss";
import Logo from '../../assets/Logo/stonkers-logo.svg';
import { Link } from 'react-router-dom';

export default class SignUpPage extends Component {
  render() {
    return (
      <div className='signUpPage'>
        <div className='signup'>
          <div className='signup__logo'>
            <img className='signup__img' src={Logo} alt="stonkers logo"></img>
            <h1 className='signup__title'>Stonkers</h1>
          </div>
          <form className='signup__form'>
            <input className='signup__input signup__input--username'
            name="username"
            placeholder='Username'>
            </input>
            <input className='signup__input signup__input--password'
            name="password"
            placeholder='Password'>
            </input>
            <input className='signup__input signup__input--cpassword'
            name="confirm"
            placeholder='Confirm password'>
            </input>
            <button className='signup__btn signup__btn--login' type="submit" >Sign up</button>
            <Link to="/login">Login</Link>
          </form>
        </div>
      </div>
    );
  }
}

