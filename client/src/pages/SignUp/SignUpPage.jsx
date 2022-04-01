import React, { Component } from 'react';
import "./SignUpPage.scss";
import Logo from '../../assets/Logo/stonkers-logo.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const serverURL = process.env.REACT_APP_SERVER_URL;
// console.log(serverURL);

export default class SignUpPage extends Component {

  state = {

  }

  handleRegister(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirm.value;

    // TO VERIFY
    axios.post(`${serverURL}/signup`, {
      username: username,
      password: password,
      confirm: confirmPass
    }).then(response => {
      console.log("New User profile created");
      window.location = '/login'
    }).catch(err => console.log("sign up error", err))
  }

  render() {
    return (
      <div className='signUpPage'>
        <div className='signup'>
          <div className='signup__logo'>
            <img className='signup__img' src={Logo} alt="stonkers logo"></img>
            <h1 className='signup__title'>Stonkers</h1>
          </div>
          <form className='signup__form' onSubmit={this.handleRegister}>
            <input className='signup__input signup__input--username'
            type="text"
            name="username"
            placeholder='Username'>
            </input>
            <input className='signup__input signup__input--password'
            type="password"
            name="password"
            placeholder='Password'>
            </input>
            <input className='signup__input signup__input--cpassword'
            type="password"
            name="confirm"
            placeholder='Confirm password'>
            </input>
            <button className='signup__btn signup__btn--login' type="submit" >Sign up</button>
            <Link className="signup__link" to="/login">Login</Link>
          </form>
        </div>
      </div>
    );
  }
}

