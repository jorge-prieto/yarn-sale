import React from "react";
import Logo from "../../assets/logo/logo_bota_fora.svg"
import Email from "../../assets/img/svg/email.svg"
import "./SendEmail.css"

export const SendEmail = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img
          src={Logo}
          alt="logo"
          className="logo"
        />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your email for instructions to reset your password
        </p>
        <div className="email-image">
          <img
            src={Email}
            alt="Email"
            className="image"
          />
        </div>
        <button className="primary-button login-button">Login</button>
        <p>
          <span>Didn't recieve the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};
