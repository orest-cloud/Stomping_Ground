import React from 'react';
import { Link } from 'react-router-dom';

// Components import
import Header from '../../Components/Header/Header'

// Images import
import createAccountIcon from '../../Assets/Icons/create_account_icon.png'

// Styles import
import './CreateAccount.scss';

export default function CreateAccount() {
  document.title = "Create Account | StompingGround";

  return (
    <>
    <Header />

    <main className="createaccount">
      <img src={createAccountIcon} alt="Sign In" className="createaccount__icon"/>

      <h2 className="createaccount__heading">Create Account</h2>

      <form className="createaccount__form">
        <label htmlFor="username" className="createaccount__label">Choose a username</label>
        <input name="username" type="text" className="createaccount__input"/>

        <label htmlFor="password" className="createaccount__label">Choose a password</label>
        <input name="password" type="password" className="createaccount__input
        createaccount__input--last"/>

        <button className="createaccount__button">Create Account</button>
      </form>

      <p className="createaccount__paragraph">Already have an account? <Link to="/signin" className="createaccount__link">Sign in here</Link>.</p>

    </main>

    </>
  )
}    