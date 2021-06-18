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
        </React.Fragment>
      }
    />
  );
}
export default Home;
