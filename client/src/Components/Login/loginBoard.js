import React, { useState } from "react";

import "./loginBoardStyles.css";
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
    <div className="registration-form">
      <header>
        <h1>Login</h1>
        <p>Fill in all information</p>
      </header>
      <form>
        <div
          id="yo"
          className={
            emailSection
              ? "input-section email-section fold-up"
              : "input-section email-section loggingIn"
          }
        >
          <input
            className="email"
            onChange={emailInput}
            placeholder="ENTER YOUR E-MAIL HERE"
          />
        </div>
        <div
          className={`input-section password-section loggingIn passwordLogin ${
            passwordSection ? "fold-up" : emailSection ? "" : "folded"
          }`}
        >
          <input
            onChange={passwordInput}
            className="password"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
          />
        </div>
      </form>
    </div>
  );
}
export default RegisterBoard;
