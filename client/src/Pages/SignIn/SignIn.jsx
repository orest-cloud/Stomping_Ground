import React from 'react';
import { Link } from 'react-router-dom';

// Components import
import Header from '../../Components/Header/Header'

// Images import
import signInIcon from '../../Assets/Icons/signin_icon.png'

// Styles import
import './SignIn.scss';

export default function SignIn() {
  document.title = "Sign In | StompingGround";

  return (
    <>
    <Header />

    <main className="signin">
      <img src={signInIcon} alt="Sign In" className="signin__icon"/>

      <h2 className="signin__heading">Sign In</h2>

      <form className="signin__form">
        <label htmlFor="username" className="signin__label">Username</label>
        <input name="username" type="text" className="signin__input"/>

        <label htmlFor="password" className="signin__label">Password</label>
        <input name="password" type="password" className="signin__input
        signin__input--last"/>

        <button className="signin__button">Sign In</button>
      </form>

      <p className="signin__paragraph">Don’t have an account? <Link to="/createaccount" className="signin__link">Create one here</Link>.</p>

    </main>

    </>
  )
}    