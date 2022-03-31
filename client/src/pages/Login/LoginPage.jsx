
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginPage.scss';
import Logo from '../../assets/Logo/stonkers-logo.svg';

const serverURL = process.env.REACT_APP_SERVER_URL;

export default class LoginPage extends Component {

  state = {
    isLoggedIn: false,
    profile: null
  }

  componentDidMount() {
    const authToken = sessionStorage.getItem('clientAuthToken');
    // this.fetchProfile(authToken);
  }

  handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios.post(`${serverURL}/login`, {
      username: username,
      password: password
    }).then(response => {
      // console.log(response.data.token); // test
      sessionStorage.setItem('clientAuthToken', response.data.token);
      this.state.isLoggedIn = true; // not sure here
      this.fetchProfile(response.data.token);
    }).catch(err => console.log("login error", err))
  }

  fetchProfile = (token) => {
    axios.get(`${serverURL}/`, { // not sure id here
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      this.setState({
        isLoggedIn: true,
        profile: response.data
      });
      window.location = '/' // redirects to main page after fetching profile
    }).catch(err => console.log('Profile-error', err))
  }

  render() {
    return (
      <>
      {!this.state.isLoggedIn &&
        <div className='loginPage'>
          <div className='login'>
            <div className='login__logo'>
              <img className='login__img' src={Logo} alt="stonkers logo"></img>
              <h1 className='login__title'>Stonkers</h1>
            </div>
            <form className='login__form' onSubmit={this.handleLogin}>
              <input className='login__input login__input--username'
              type="text"
              name="username"
              placeholder='Username'>
              </input>
              <input className='login__input login__input--password'
              type="password"
              name="password"
              placeholder='Password'>
              </input>
              <button className='login__btn login__btn--login' type="submit" >Login</button>
              <Link to="/signup">Sign up</Link>
            </form>
          </div>
        </div>
      }
      </>
    );
  }
}

