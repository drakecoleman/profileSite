import React, { useState, useEffect } from "react";
import Board from "./../QuestionBoard/board.js";

import "./register.css";

function RegisterBoard(props) {
  return (
    <Board
      header="Register"
      headerText="Fill in all Information"
      firstPlaceHolder="Enter your email"
      secondPlaceholder="Enter your password"
      thirdPlaceholder="Re-enter your password"
      passwordMatchClass="label"
      fetchRoute="register"
    />
  );
}
export default RegisterBoard;
