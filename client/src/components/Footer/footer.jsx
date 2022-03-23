import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <div className='footer'>
      <p className='footer__text'>&copy; SimonMilord</p>
      <Link to="/github">Link to Github</Link>
      <Link to="/linkedin">Link to LinkedIn</Link>
    </div>
  );
}
