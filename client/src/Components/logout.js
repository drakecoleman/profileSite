import React from "react";
import DivforButton from "./Button/DivforButton";
import Button from "./Button/button";
import { useHistory } from "react-router-dom";
// import { Redirect } from "react-router-dom";

function LogOut() {
  const history = useHistory();
  function loggingout(e) {
    e.preventDefault();

    fetch("http://localhost:3000/logout", {
      method: "GET",
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response); // Will show you the status
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        console.log("hmm");

        return history.push("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Click to Logout </h1>
      <DivforButton
        button={
          <React.Fragment>
            <Button
              text="TESTLogout"
              link="/"
              type="Submit"
              onClick={loggingout}
            />
            <Button text="Register" link="/register" />
            <Button text="Home" link="/" />
            <Button text="Login" link="/login" />
            <Button text="Profile" link="/user" />
          </React.Fragment>
        }
      />
    </div>
  );
}

export default LogOut;
