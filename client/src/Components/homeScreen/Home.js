import React, { useState, useEffect, useContext } from "react";
import Notlogged from "./greetingScreens/notLoggedGreeting";
import Logged from "./greetingScreens/loggedGreeting";
import { LoginContext, DialogueContext } from "./../../Context/context";

function Home() {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const { openDialogue, setDialogue } = useContext(DialogueContext);
  let [logged, changeLogged] = useState(false);
  // useEffect(() => {
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
        // console.log(response.status);
        changeLogged(false);
      } else {
        changeLogged(true);
        return response.json();
      }
    })
    .then((data) => {
      console.log(data.response);
      return;
    })
    .catch((err) => console.log(err));
  // }, [userInfo]);

  return logged ? <Logged /> : <Notlogged />;
}
export default Home;
