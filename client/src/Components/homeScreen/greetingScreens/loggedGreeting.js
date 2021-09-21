import React, { useState } from "react";
import DivforButton from "../../Button/DivforButton";
import Button from "../../Button/button";
function Logged() {
  return [
    <DivforButton
      button={
        <React.Fragment>
          <Button key="1" text="Profile" link="/user" />,
          <Button key="2" text="Logout" link="/logout" />
        </React.Fragment>
      }
    />,
  ];
}
export default Logged;
