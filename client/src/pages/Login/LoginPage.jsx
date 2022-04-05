import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginPage.scss';
import Logo from '../../assets/Logo/stonkers-logo.svg';
import Footer from '../../components/Footer/footer';

const serverURL = process.env.REACT_APP_SERVER_URL;

export default class LoginPage extends Component {

  state = {
    isLoggedIn: false,
    profile: null,
    missingUsername: false,
    missingPassword: false,
    userNotFound: false,
    loginError: ""
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      missingUsername: false,
      missingPassword: false,
      userNotFound: false,
      loginError: ""
    });
    const username = e.target.username.value;
    const password = e.target.password.value;

    axios.post(`${serverURL}/login`, {
      username: username,
      password: password
    }).then(response => {
      sessionStorage.setItem('clientAuthToken', response.data.token);
      this.setState({
        isLoggedIn: true
      });
      this.fetchProfile(response.data.token);
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
      if (err.response.status === 404 && username && password) {
        this.setState({
          userNotFound: true,
          loginError: err.response.data.message,
        })
      }
      if (err.response.status === 403) {
        this.setState({
          loginError: err.response.data.message,
        })
      }
    }
  )}


  fetchProfile = (token) => {
    axios.get(`${serverURL}/`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      sessionStorage.setItem('username', response.data.username);
      this.setState({
        profile: response.data
      });
      window.location = '/main'
    }).catch(err => console.log('Profile-error', err))
  }

  render() {
    document.title = "Stonkers - Login"
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
                {(this.state.loginError !== "" || this.state.userNotFound) &&
                  <span className='login__span'>{this.state.loginError}</span>
                }
                {(this.state.missingUsername || this.state.missingPassword) &&
                  <span className='login__span'>Please enter username and password</span>
                }
                <input className={this.state.missingUsername || this.state.loginError !== "" || this.userNotFound ? "login__input login__input--invalid" : "login__input"}
                type="text"
                name="username"
                required=""
                placeholder='Username'>
                </input>
                <input className={this.state.missingPassword || this.state.loginError !== "" || this.userNotFound ? "login__input login__input--invalid" : "login__input"}
                type="password"
                name="password"
                required=""
                placeholder='Password'>
                </input>
                <button className='login__btn login__btn--login' type="submit" >Login</button>
                <Link className="login__link" to="/signup">Sign up</Link>
              </form>
            </div>
            <Footer />
          </div>
        }
      </>
    );
  }
}

