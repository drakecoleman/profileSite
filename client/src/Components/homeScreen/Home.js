import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Notlogged from "./greetingScreens/notLoggedGreeting";
import Logged from "./greetingScreens/loggedGreeting";
import { LoginContext, DialogueContext } from "./../../Context/context";

function Home() {
  const history = useHistory();
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
        const data = response.json();
        return data;
      })
      .then((data) => {
        if (data.auth != false) {
          setUserInfo({
            ...userInfo,
            id: data.user._id,
            fName: data.user.fName,
            lName: data.user.lName,
            title: data.user.title,
          });
          changeLogged(true);
          setUsersArray(data.response);
        } else {
          return changeLogged(false);
        }
      })

      .catch((err) => console.log(err));
  }, [logged, changeLogged]);

  return logged ? <Logged users={usersArray} /> : <Notlogged />;
}
export default Home;
