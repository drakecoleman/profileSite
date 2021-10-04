import React, { useState } from "react";

import "./register.css";
function RegisterBoard() {
  const emailPointer = document.querySelector("emailPointer");
  const [email, changeEmail] = useState(false);
  const [email2, changeEmailPointer] = useState(false);
  const foldingEmail = () => {};
  const emailInput = () => {
    changeEmail(true);
  };
  return (
    <section className="popUp">
      <div className="back">
        <div className="registration-form">
          <header className="unique">
            <h1>Sign Up</h1>
            <p>Fill in all informations</p>
          </header>
          <form>
            <div className="input-section email-section">
              <input
                className="email"
                onChange={emailInput}
                placeholder="ENTER YOUR E-MAIL HERE"
              />
              <div className="animated-button">
                <span
                  className={
                    email ? "icon-paper-plane next" : "icon-paper-plane"
                  }
                >
                  <i className="fa fa-envelope-o"></i>
                </span>
                <span
                  className={email ? "next-button pointer" : "next-button"}
                  onClick={foldingEmail}
                >
                  <i className="fa fa-arrow-up"></i>
                </span>
              </div>
            </div>
            <div className="input-section password-section folded">
              <input
                className="password"
                type="password"
                placeholder="ENTER YOUR PASSWORD HERE"
              />
              <div className="animated-button">
                <span className="icon-lock">
                  <i className="fa fa-lock"></i>
                </span>
                <span className="next-button password">
                  <i className="fa fa-arrow-up"></i>
                </span>
              </div>
            </div>
            <div className="input-section repeat-password-section folded">
              <input
                className="repeat-password"
                type="password"
                placeholder="REPEAT YOUR PASSWORD HERE"
              />
              <div className="animated-button">
                <span className="icon-repeat-lock">
                  <i className="fa fa-lock"></i>
                </span>
                <span className="next-button repeat-password">
                  <i className="fa fa-paper-plane"></i>
                </span>
              </div>
            </div>
            <div className="success">
              <p>ACCOUNT CREATED</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default RegisterBoard;
