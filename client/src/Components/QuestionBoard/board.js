import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Label from "./label";
import "./../Register/register.css";

function Board(props) {
  const Match = document.querySelector("label");

  const [register, changeRegister] = useState({
    email: false,
    eSection: false,
    password: false,
    pSection: false,
    repeatPassword: false,
    p2Section: false,
  });
  const [info, changeInfo] = useState({
    firstInput: "",
    secondInput: "",
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
    if (info.secondInput !== "") {
      register.password = true;
    }
    if (info.secondInput !== "" && info.secondInput === info.repeatPassword) {
      changeRegister({
        ...register,
        repeatPassword: true,
      });

      Match.style.display = "none";
    }
    if (info.secondInput !== info.repeatPassword) {
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
    fetch(`http://localhost:3000/${props.fetchRoute}`, {
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
        } else {
          changeRegister({
            ...register,
            p2Section: true,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="registration-form">
      <header className="header">
        <h1>{props.header}</h1>
        <p>{props.headerText}</p>
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
            name="firstInput"
            data-name="email"
            className="email"
            onChange={(e) => {
              changeValue(e);
              input(e);
            }}
            placeholder={props.firstPlaceHolder}
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
            name="secondInput"
            data-name="password"
            onChange={(e) => {
              changeValue(e);
              input(e);
            }}
            className="password"
            type="password"
            placeholder={props.secondPlaceholder}
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
          <Label labelClass={props.passwordMatchClass} />
          <input
            id="pwd"
            name="repeatPassword"
            data-name="repeatPassword"
            onChange={(e) => {
              changeValue(e);
            }}
            className="repeat-password"
            type="password"
            placeholder={props.thirdPlaceholder}
          />
          <div className="animated-button">
            <span
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

        <div className={`success ${register.p2Section ? "show" : ""}`}>
          <p>ACCOUNT CREATED</p>
          <p>Now try Logging In!</p>
        </div>
      </form>
    </div>
  );
}
export default Board;
