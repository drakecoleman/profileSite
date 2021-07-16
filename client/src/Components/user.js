import React, { useState } from "react";
import DivforButton from "./Button/DivforButton";
import Button from "./Button/button";
import { useParams } from "react-router-dom";

function UserProfile() {
  let [logged, changeLogged] = useState(false);
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
        return changeLogged(false);
      } else {
        return changeLogged(true);
      }
    })

    .catch((err) => console.log(err));

  return (
    <h1>
      <DivforButton
        button={
          <React.Fragment>
            <Button text="Home" link="/" />
            {logged ? (
              <Button text="Logout" link="/logout" />
            ) : (
              <Button text="Login" link="/login" />
            )}

            <Button text="Edit" />
          </React.Fragment>
        }
      />
    </h1>
  );
}

export default UserProfile;
