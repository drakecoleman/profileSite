import React, { useState, useEffect } from "react";
import DivforButton from "./Button/DivforButton";
import Button from "./Button/button";

import { useParams } from "react-router-dom";

function Visitor() {
  const params = useParams();
  const [user, changeUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    fetch("http://localhost:3000/visitor", {
      method: "Post",
      credentials: "include",
      withCredentials: true,

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: params.url }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        changeUser({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.username,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>
        First Name: {user.firstName} {user.lastName}
      </h1>
      <DivforButton
        button={
          <React.Fragment>
            <Button text="Home" link="/" />

            <Button text="Profile" link="/user" />
          </React.Fragment>
        }
      />
    </div>
  );
}

export default Visitor;
