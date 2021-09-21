import React, { useState } from "react";
import DivforButton from "../Button/DivforButton";
import Button from "../Button/button";
import Notlogged from "./greetingScreens/notLoggedGreeting";
import Logged from "./greetingScreens/loggedGreeting";
function Home() {
  let [logged, changeLogged] = useState(false);

  // fetch("http://localhost:3000/user", {
  //   method: "GET",
  //   credentials: "include",
  //   withCredentials: true,

  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then(function (response) {
  //     if (!response.ok) {
  //       changeLogged(false);
  //     } else {
  //       changeLogged(true);
  //     }
  //   })
  //   .then(() => {
  //     return;
  //   })
  //   .catch((err) => console.log(err));
  return (
    <DivforButton
      button={
        <React.Fragment>{logged ? <Logged /> : <Notlogged />}</React.Fragment>
      }
    />
  );
}
export default Home;
