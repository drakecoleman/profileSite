import React from "react";
// import { Redirect } from "react-router-dom";

function UserProfile() {
  // if (props.auth === true) {
  //   return <Redirect to="/login" />;
  // } else {
  //   return <h1 className="red">Logged in </h1>;
  // }
  fetch("http://localhost:3000/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  return <h1>Hello</h1>;
}

export default UserProfile;
