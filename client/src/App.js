import React, { useState } from "react";
// import Register from "./Components/Register/register";
import Login from "./Components/login";
import Home from "./Components/homeScreen/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./Components/User/user.js";
import Logout from "./Components/logout";
import Visitor from "./Components/visitor";
import { LoginContext, DialogueContext } from "./Context/context";

function App() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    fName: "",
    lName: "",
    title: "",
  });
  const [openDialogue, setDialogue] = useState(true);

  let routes;

  routes = (
    <React.Fragment>
      <DialogueContext.Provider value={{ openDialogue, setDialogue }}>
        <LoginContext.Provider value={{ userInfo, setUserInfo }}>
          <Switch>
            <Home exact path="/" />
          </Switch>
        </LoginContext.Provider>
      </DialogueContext.Provider>
    </React.Fragment>
  );

  return <Router>{routes}</Router>;
}

export default App;
