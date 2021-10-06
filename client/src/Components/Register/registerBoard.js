import React, { useState } from "react";

import "./register.css";
function RegisterBoard() {
  const [email, changeEmail] = useState(false);
  const [email2, changeEmailPointer] = useState(false);
  const [emailSection, changeEmailSection] = useState(false);
  const foldingEmail = () => {
    changeEmailSection(true);
  };
  const emailInput = () => {
    changeEmail(true);
  };
  const [password, changePassword] = useState(false);
  const [password2, changePasswordPointer] = useState(false);
  const [passwordSection, changePasswordSection] = useState(false);
  const foldingPassword = () => {
    changePasswordSection(true);
  };
  const passwordInput = () => {
    changePassword(true);
  };
  const [passwordCheck, changePasswordCheck] = useState(false);
  const [passwordPointer, changeCheckPointer] = useState(false);
  const [passwordCheckSection, changePasswordCheckSection] = useState(false);
  const foldingPasswordCheck = () => {
    changePasswordCheckSection(true);
    document.querySelector(".success").style.marginTop = "0";
  };
  const passwordCheckInput = () => {
    changePasswordCheck(true);
  };
  return (
    <div className="back">
      <div className="registration-form">
        <header>
          <h1>Sign Up</h1>
          <p>Fill in all information</p>
        </header>
        <form>
          <div
            className={
              emailSection
                ? "input-section email-section fold-up"
                : "input-section email-section"
            }
          >
            <input
              className="email"
              onChange={emailInput}
              placeholder="ENTER YOUR E-MAIL HERE"
            />
            <div className="animated-button">
              <span
                className={email ? "icon-paper-plane next" : "icon-paper-plane"}
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
          <div
            className={`input-section password-section ${
              passwordSection ? "fold-up" : emailSection ? "" : "folded"
            }`}
          >
            <input
              onChange={passwordInput}
              className="password"
              type="password"
              placeholder="ENTER YOUR PASSWORD HERE"
            />
            <div className="animated-button">
              <span className={password ? "icon-lock next" : "icon-lock"}>
                <i className="fa fa-lock"></i>
              </span>
              <span
                className={
                  password
                    ? "next-button password pointer"
                    : "next-button password"
                }
                onClick={foldingPassword}
              >
                <i className="fa fa-arrow-up"></i>
              </span>
            </div>
          </div>
          <div
            className={`input-section repeat-password-section ${
              passwordCheckSection ? "fold-up" : passwordSection ? "" : "folded"
            }`}
          >
            <input
              onChange={passwordCheckInput}
              className="repeat-password"
              type="password"
              placeholder="REPEAT YOUR PASSWORD HERE"
            />
            <div className="animated-button">
              <span
                className="icon-repeat-lock"
                className={
                  passwordCheck ? "icon-repeat-lock next" : "icon-repeat-lock"
                }
              >
                <i className="fa fa-lock"></i>
              </span>
              <span
                onClick={foldingPasswordCheck}
                className={
                  passwordCheck
                    ? "next-button pointer repeat-password"
                    : "next-button repeat-password"
                }
              >
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
  );
}
export default RegisterBoard;
