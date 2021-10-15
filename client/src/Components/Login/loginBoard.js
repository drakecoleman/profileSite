import React, { useState } from "react";

import "./loginBoardStyles.css";
function RegisterBoard() {
  return (
    <div className="logPopUp">
      <form>
        <div>
          <input
            className="loggingInput"
            placeholder="ENTER YOUR E-MAIL HERE"
          />
        </div>
        <div>
          <input
            className="loggingInput"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
          />
        </div>

        <button className="submitButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default RegisterBoard;
