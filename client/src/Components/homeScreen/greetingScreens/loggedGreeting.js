import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DivforButton from "../../Button/DivforButton";
import Button from "../../Button/button";
import "./loggedStyles.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SecondBoard from "../../QuestionBoard/secondBoard";

function Logged(props) {
  const history = useHistory();
  const [userInfo, changeUserInfo] = useState({
    fName: "",
    lName: "",
    title: "",
  });

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const [openRegister, setOpenRegister] = useState(false);
  const openQuestions = () => {
    if (props.fName === "") {
      setOpenRegister(true);
      return;
    } else {
      setOpenRegister(false);
      return;
    }
  };

  const handleClickOpen = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  useEffect(() => {
    fetch("http://localhost:3000/user", {
      method: "GET",
      credentials: "include",
      withCredentials: true,

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (!response.ok) {
          console.log(response.status);
          throw new Error("HTTP status " + response.status);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data.fName);
        changeUserInfo({
          ...userInfo,
          fName: data.fName,
          lName: data.lName,
          title: data.title,
        });
      })

      .catch((err) => console.log(err));
  }, []);

  return [
    <div class="wrapper">
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openQuestions}
        onClose={handleCloseRegister}
        sx={{ border: "solid black" }}
      >
        <DialogContent sx={{ p: 0, borderRadius: "2vw" }}>
          <SecondBoard
            header="Basic Information"
            headerText="Fill in all Information"
            firstPlaceHolder="Enter your first name here"
            secondPlaceholder="Enter your last name here"
            thirdPlaceholder="Your Title (Job/Career)"
            passwordMatchClass="noDisplay"
            fetchRoute="user"
          />
        </DialogContent>
      </Dialog>
      <h3>
        {userInfo.fName} {userInfo.lName}
      </h3>

      <div class="section">
        <div class="top_navbar">
          <h4>DashBoard</h4>
        </div>
        <div class="container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>
      <div class="sidebar">
        <div class="profile">
          <img
            src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
            alt="profile_picture"
          />
          <h3>
            {userInfo.fName} {userInfo.lName}
          </h3>
          <p>{userInfo.title}</p>
        </div>
        <ul>
          <li>
            <a href="#" class="active">
              <span class="icon">
                <i class="fas fa-home"></i>
              </span>
              <span class="item">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-desktop"></i>
              </span>
              <span class="item">My Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-user-friends"></i>
              </span>
              <span class="item">People</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-tachometer-alt"></i>
              </span>
              <span class="item">Perfomance</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-database"></i>
              </span>
              <span class="item">Development</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-chart-line"></i>
              </span>
              <span class="item">Reports</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-user-shield"></i>
              </span>
              <span class="item">Admin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-cog"></i>
              </span>
              <span class="item">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>,
  ];
}
export default Logged;
