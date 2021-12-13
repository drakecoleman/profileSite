import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/homeScreen/Home";
import {
  LoginContext,
  DialogueContext,
  ChatContext,
  ShowProfileContext,
} from "./Context/context";
import Messages from "./Components/Messages/messages";

function App() {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: "",
    fName: "",
    lName: "",
    title: "",
  });
  const [id, setID] = useState();
  const [openDialogue, setDialogue] = useState(true);

  return (
    <Router>
      <React.Fragment>
        <ShowProfileContext.Provider value={{ show, setShow }}>
          <ChatContext.Provider value={{ id, setID }}>
            <DialogueContext.Provider value={{ openDialogue, setDialogue }}>
              <LoginContext.Provider value={{ userInfo, setUserInfo }}>
                <Switch>
                  <Home exact path="/" />
                  <Messages exact path="/messages" />
                </Switch>
              </LoginContext.Provider>
            </DialogueContext.Provider>
          </ChatContext.Provider>
        </ShowProfileContext.Provider>
      </React.Fragment>
    </Router>
  );
}

export default App;
