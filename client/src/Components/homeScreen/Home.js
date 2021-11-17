import React, { useState, useEffect, useContext } from "react";
import Notlogged from "./greetingScreens/notLoggedGreeting";
import Logged from "./greetingScreens/loggedGreeting";
import { LoginContext, DialogueContext } from "./../../Context/context";

function Home() {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const { openDialogue, setDialogue } = useContext(DialogueContext);
  let [logged, changeLogged] = useState(false);
  let [usersArray, setUsersArray] = useState([]);
  useEffect(() => {
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
          changeLogged(false);
        } else {
          changeLogged(true);
          return response.json();
        }
      })
      .then((data) => {
        setUserInfo({
          ...userInfo,
          id: data.user._id,
          fName: data.user.fName,
          lName: data.user.lName,
          title: data.user.title,
        });
        setUsersArray(data.response);
      })

      .catch((err) => console.log(err));
  }, []);

  return logged ? <Logged users={usersArray} /> : <Notlogged />;
}
export default Home;
