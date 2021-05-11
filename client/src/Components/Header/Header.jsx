import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <nav className="header">
      <div className="header__content-container">
        <Link to="/" className="header__logo-link">Stomping<span className="header__logo-link-span">Ground</span></Link>
      </div>
    </nav>
  )
}