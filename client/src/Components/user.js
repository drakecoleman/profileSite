import React, { useState } from "react";
import DivforButton from "./Button/DivforButton";
import Button from "./Button/button";
// import { Redirect } from "react-router-dom";

function UserProfile() {
  const [name, changeName] = useState();

  fetch("http://localhost:3000/user", {
    method: "GET",
    credentials: "include",
    withCredentials: true,

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())

    .then((data) => changeName(data.firstName))
    .catch((err) => console.log(err));
  return (
    <h1>
      Hello {name}
      <DivforButton
        button={
          <React.Fragment>
            <Button text="Home" link="/" />
            <Button text="Logout" link="/logout" />
          </React.Fragment>
        }
      />
    </h1>
  );
}

export default UserProfile;
