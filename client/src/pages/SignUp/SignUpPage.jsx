import React, { Component } from 'react';
import "./SignUpPage.scss";
import Logo from '../../assets/Logo/stonkers-logo.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/footer';

const serverURL = process.env.REACT_APP_SERVER_URL;

export default class SignUpPage extends Component {

  state = {
    missingUsername: false,
    missingPassword: false,
    missingConfirm: false
  }

  handleRegister(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirm.value;

    axios.post(`${serverURL}/signup`, {
      username: username,
      password: password,
      confirm: confirmPass
    }).then(response => {
      console.log(response);
      window.location = '/login'
    }).catch(err => {
      if (!username) {
        this.setState({
          missingUsername: true
        });
      }
      if (!password) {
        this.setState({
          missingPassword: true
        });
      }
      if (!confirmPass) {
        this.setState({
          missingConfirm: true
        })
      }
      console.log("sign up error", err)
    }
  )}
  render() {
    return (
      <div className='signUpPage'>
        <div className='signup'>
          <div className='signup__logo'>
            <img className='signup__img' src={Logo} alt="stonkers logo"></img>
            <h1 className='signup__title'>Stonkers</h1>
          </div>
          <form className='signup__form' onSubmit={this.handleRegister}>
            <input className={this.state.missingUsername ? "signup__input signup__input--invalid" : "signup__input"}
            type="text"
            name="username"
            required=""
            placeholder='Username'>
            </input>
            <input className={this.state.missingUsername ? "signup__input signup__input--invalid" : "signup__input"}
            type="password"
            name="password"
            required=""
            placeholder='Password'>
            </input>
            <input className={this.state.missingUsername ? "signup__input signup__input--invalid" : "signup__input"}
            type="password"
            name="confirm"
            required=""
            placeholder='Confirm password'>
            </input>
            <button className='signup__btn signup__btn--login' type="submit" >Sign up</button>
            <Link className="signup__link" to="/login">Login</Link>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

