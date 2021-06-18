import React, { useState } from "react";
import Background from "./Components/video";

import Register from "./Components/register";
import Login from "./Components/login";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import UserProfile from "./Components/user";

function App() {
  const [loggedOut, changeLogin] = useState(true);
  function change() {
    return changeLogin(false);
  }

  let routes;

  routes = (
    <React.Fragment>
      <Switch>
        <Home exact path="/" />
        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} auth={change} />}
        ></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/user" component={UserProfile}></Route>
      </Switch>
    </React.Fragment>
  );

  return (
    <Router>
      {loggedOut ? <Background /> : null}
      {routes}
    </Router>
  );
}

export default App;
