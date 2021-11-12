import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import "./loggedStyles.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SecondBoard from "../../QuestionBoard/secondBoard";
import { LoginContext, DialogueContext } from "../../../Context/context";

function Logged(props) {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const { openDialogue, setDialogue } = useContext(DialogueContext);

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  useEffect(() => {
    if (userInfo.fName !== "") {
      setDialogue(false);
    } else {
      setDialogue(true);
    }
  }, [userInfo, setDialogue]);

  const closeDialogue = () => {
    setDialogue(true);
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
        if (userInfo.fName === "") {
          setUserInfo({
            ...userInfo,
            id: data._id,
            fName: data.fName,
            lName: data.lName,
            title: data.title,
          });
        } else {
          return;
        }
      })
      .catch((err) => console.log(err));
  }, [userInfo, setUserInfo]);
  useEffect(() => {
    fetch("http://localhost:3000/users", {
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
        console.log(data);
      })

      .catch((err) => console.log(err));
  }, []);

  return [
    <div className="wrapper">
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openDialogue}
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

      <div className="section">
        <div className="top_navbar">
          <h4>DashBoard</h4>
        </div>
        <div className="container">
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
      <div className="sidebar">
        <div className="profile">
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
            <a href="/" className="active">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="item">Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-desktop"></i>
              </span>
              <span className="item">My Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-user-friends"></i>
              </span>
              <span className="item">People</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-tachometer-alt"></i>
              </span>
              <span className="item">Perfomance</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-database"></i>
              </span>
              <span className="item">Development</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-chart-line"></i>
              </span>
              <span className="item">Reports</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-user-shield"></i>
              </span>
              <span className="item">Admin</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-cog"></i>
              </span>
              <span className="item">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>,
  ];
}
export default Logged;
