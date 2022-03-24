import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import Linkedin from "../../assets/Icons/linkedin.png";
import Github from "../../assets/Icons/github.png";

export default function Footer(props) {
  return (
    <div className='footer'>
      <p className='footer__text'>&copy; SimonMilord</p>
      <div className='footer__box'>
        <Link to="/github" className='footer__link'><img className='footer__img' src={Github} alt="github logo"></img></Link>
        <Link to="/linkedin" className='footer__link'><img className='footer__img' src={Linkedin} alt="linkedin logo"></img></Link>
      </div>
    </div>
  );
}


