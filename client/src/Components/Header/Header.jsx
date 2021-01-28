import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <nav className="header">

      <Link className="header__logo-link">Stomping<span className="header__logo-link-span">Ground</span></Link>
      <Link className="header__link">Create Account</Link>
      <Link className="header__link header__link--last-item">Sign In</Link>

    </nav>
  )
}