import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./loginBoardStyles.css";
function RegisterBoard() {
  const history = useHistory();
  const [login, changeLogin] = useState({ username: "", password: "" });
  function loginChange(e) {
    const { name, value } = e.target;
    changeLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function submission(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then(function (response) {
        if (!response.ok) {
          console.log(response.status);
          throw new Error("HTTP status " + response.status);
        } else {
          return history.push("/");
        }
      })
      .then((data) => console.log(data))

      .catch((err) => console.log(err));
  }

  return (
    <div className="logPopUp">
      <form>
        <div>
          <input
            className="loggingInput"
            placeholder="ENTER YOUR E-MAIL HERE"
            type="email"
            name="username"
            onChange={loginChange}
            value={login.username}
          />
        </div>
        <div>
          <input
            className="loggingInput"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
            name="password"
            onChange={loginChange}
            value={login.password}
          />
        </div>

        <button className="submitButton" type="submit" onClick={submission}>
          Login
        </button>
      </form>
    </div>
  );
}
export default RegisterBoard;
