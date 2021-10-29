import React, { useState } from "react";
import DivforButton from "../Button/DivforButton";
import Button from "../Button/button";
import Notlogged from "./greetingScreens/notLoggedGreeting";
import Logged from "./greetingScreens/loggedGreeting";
function Home() {
  let [logged, changeLogged] = useState(false);

  fetch("http://localhost:3000/", {
    method: "GET",
    credentials: "include",
    withCredentials: true,

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (!response.ok) {
        console.log(response);
        changeLogged(false);
      } else {
        changeLogged(true);
        response.json();
      }
    })
    .then((data) => {
      return console.log("Check");
    })
    .catch((err) => console.log(err));
  return logged ? <Logged /> : <Notlogged />;
}
export default Home;
