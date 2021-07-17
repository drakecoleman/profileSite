import React, { useState } from "react";
import DivforButton from "./Button/DivforButton";
import Button from "./Button/button";
import { useParams, useHistory } from "react-router-dom";

function UserProfile() {
  const history = useHistory();

  // const [name, changeName] = useState();
  const params = useParams();

  fetch("http://localhost:3000/user", {
    method: "GET",
    credentials: "include",
    withCredentials: true,

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (!response.ok) {
        return history.push("/login");
      } else {
        return;
      }
    })

    .catch((err) => console.log(err));

  return (
    <h1>
      <DivforButton
        button={
          <React.Fragment>
            <Button text="Home" link="/" />
            <Button text="Logout" link="/logout" />
            <Button text="Edit" />
          </React.Fragment>
        }
      />
    </h1>
  );
}

export default UserProfile;
