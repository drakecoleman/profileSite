import React from "react";
import DivforButton from "./Button/DivforButton";
import Button from "./Button/button";
function Home() {
  return (
    <DivforButton
      button={
        <React.Fragment>
          <Button text="Login" link="/login" />
          <Button text="Register" link="/register" />
          <Button text="Profile" link="/user" />
          <Button text="Logout" link="/logout" />
        </React.Fragment>
      }
    />
  );
}
export default Home;
