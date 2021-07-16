import React, { useState } from "react";
import DivforButton from "./Button/DivforButton";
import Button from "./Button/button";
function Home() {
  let [logged, changeLogged] = useState(false);

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
        changeLogged(false);
      } else {
        changeLogged(true);
      }
    })
    .then(() => {
      return;
    })
    .catch((err) => console.log(err));
  return (
    <DivforButton
      button={
        <React.Fragment>
          {logged
            ? [
                <Button key="1" text="Profile" link="/user" />,
                <Button key="2" text="Logout" link="/logout" />,
              ]
            : [
                <Button key="3" text="Login" link="/login" />,
                <Button key="4" text="Register" link="/register" />,
              ]}
        </React.Fragment>
      }
    />
  );
}
export default Home;
