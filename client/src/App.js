import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Components/homeScreen/Home";
import { LoginContext, DialogueContext } from "./Context/context";

function App() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    fName: "",
    lName: "",
    title: "",
  });
  const [openDialogue, setDialogue] = useState(true);

  return (
    <Router>
      <React.Fragment>
        <DialogueContext.Provider value={{ openDialogue, setDialogue }}>
          <LoginContext.Provider value={{ userInfo, setUserInfo }}>
            <Switch>
              <Home exact path="/" />
            </Switch>
          </LoginContext.Provider>
        </DialogueContext.Provider>
      </React.Fragment>
    </Router>
  );
}

export default App;
