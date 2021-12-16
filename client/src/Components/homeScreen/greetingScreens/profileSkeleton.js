import React, { useState, useContext, useEffect } from "react";
import "./loggedStyles.css";
import { LoginContext, DialogueContext } from "../../../Context/context";
import ChatBox from "../../Chat/chatBox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import SecondBoard from "../../QuestionBoard/secondBoard";

function Skeleton(props) {
  const [chats, setChats] = useState([]);
  const chatLength = chats.length;

  useEffect(() => {
    fetch("http://localhost:3000/getChats", {
      method: "GET",
      credentials: "include",
      withCredentials: true,

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setChats(data);
      });
  }, [setChats]);

  const { userInfo, setUserInfo } = useContext(LoginContext);
  const [openDialogue, setOpenDialogue] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialogue(true);
  };

  const handleClose = () => {
    setOpenDialogue(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return [
    <div className="wrapper">
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openDialogue}
        sx={{ border: "solid black" }}
        onClose={handleClose}
      >
        <DialogContent sx={{ p: 0, borderRadius: "2vw" }}>
          <ChatBox />
        </DialogContent>
      </Dialog>
      <div className="section">
        <div className="top_navbar">
          <h4>DashBoard</h4>
        </div>
        <div className="container">
          {chatLength >= 0 ? (
            chats.map((item) => {
              return (
                <button onClick={handleClickOpen}>{item.firstName}</button>
              );
            })
          ) : (
            <h1>No Messages</h1>
          )}
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
            <a href="/messages">
              <span className="icon">
                <i className="fas fa-user-shield"></i>
              </span>
              <span className="item">Messages</span>
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
export default Skeleton;
