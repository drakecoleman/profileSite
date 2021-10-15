import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

function RegisterBoard() {
  const Match = document.querySelector("label");
  const history = useHistory();
  const [register, changeRegister] = useState({
    email: false,
    eSection: false,
    password: false,
    pSection: false,
    repeatPassword: false,
    p2Section: false,
  });
  const [info, changeInfo] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const changeValue = (e) => {
    const { name, value } = e.target;

    changeInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    if (info.password !== "") {
      register.password = true;
    }
    if (info.password !== "" && info.password === info.repeatPassword) {
      changeRegister({
        ...register,
        repeatPassword: true,
      });

      Match.style.display = "none";
    }
    if (info.password !== info.repeatPassword) {
      changeRegister({
        ...register,
        repeatPassword: false,
      });

      Match.style.display = "block";
    }
  }, [info]);

  const input = (e) => {
    const target = e.target.dataset.name;
    if (target !== "repeatPassword") {
      changeRegister({
        ...register,
        [target]: true,
      });
    }
  };
  function submission(e) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }

        return history.push("/login");
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="registration-form">
      <header className="header">
        <h1>Sign Up</h1>
        <p>Fill in all information</p>
      </header>
      <form>
        <div
          className={
            register.eSection
              ? "input-section email-section fold-up"
              : "input-section email-section"
          }
        >
          <input
            value={info.email}
            name="email"
            data-name="email"
            className="email"
            onChange={(e) => {
              changeValue(e);
              input(e);
            }}
            placeholder="ENTER YOUR E-MAIL HERE"
          />
          <div className="animated-button">
            <span
              className={
                register.email ? "icon-paper-plane next" : "icon-paper-plane"
              }
            >
              <i className="fa fa-envelope-o"></i>
            </span>
            <span
              className={register.email ? "next-button pointer" : "next-button"}
              onClick={input}
            >
              <i data-name="eSection" className="fa fa-arrow-up"></i>
            </span>
          </div>
        </div>
        <div
          className={`input-section password-section ${
            register.pSection ? "fold-up" : register.eSection ? "" : "folded"
          }`}
        >
          <input
            name="password"
            data-name="password"
            onChange={(e) => {
              changeValue(e);
              input(e);
            }}
            className="password"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
          />
          <div className="animated-button">
            <span
              className={register.password ? "icon-lock next" : "icon-lock"}
            >
              <i className="fa fa-lock"></i>
            </span>
            <span
              className={
                register.password
                  ? "next-button password pointer"
                  : "next-button password"
              }
              onClick={input}
            >
              <i data-name="pSection" className="fa fa-arrow-up"></i>
            </span>
          </div>
        </div>
        <div
          className={`input-section repeat-password-section ${
            register.p2Section ? "fold-up" : register.pSection ? "" : "folded"
          }`}
        >
          <label className="label"> Passwords Must Match</label>

          <input
            id="pwd"
            name="repeatPassword"
            data-name="repeatPassword"
            onChange={(e) => {
              changeValue(e);
            }}
            className="repeat-password"
            type="password"
            placeholder="REPEAT YOUR PASSWORD HERE"
          />
          <div className="animated-button">
            <span
              className="icon-repeat-lock"
              className={
                register.repeatPassword
                  ? "icon-repeat-lock next"
                  : "icon-repeat-lock"
              }
            >
              <i className="fa fa-lock"></i>
            </span>
            <span
              className={
                register.repeatPassword
                  ? "next-button pointer repeat-password"
                  : "next-button repeat-password"
              }
            >
              <i
                onClick={submission}
                data-name="p2Section"
                className="fa fa-paper-plane"
              ></i>
            </span>
          </div>
        </div>
        <div className="success">
          <p>ACCOUNT CREATED</p>
        </div>
      </form>
    </div>
  );
}
export default RegisterBoard;
