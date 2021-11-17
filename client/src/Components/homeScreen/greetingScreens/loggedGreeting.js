import React, { useState, useContext, useEffect } from "react";
import "./loggedStyles.css";
import Profile from "./../../Cards/profile";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SecondBoard from "../../QuestionBoard/secondBoard";
import { LoginContext, DialogueContext } from "../../../Context/context";
import Card from "./../../Cards/card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Logged(props) {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const { openDialogue, setDialogue } = useContext(DialogueContext);

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const [expanded, setExpanded] = React.useState(false);
  let userArray = props.users;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
  const profileClick = (f) => {
    console.log(f);
  };
  const [test, setTest] = useState(false);

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
          {test ? (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {userArray.map((item) => (
                  <Grid item value={item._id} sm={12} md={6} lg={3}>
                    <Card
                      link="/user"
                      click={profileClick}
                      title={item.title}
                      name={item.fName}
                      value={item._id}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Grid item lg={12}>
                <Profile />
              </Grid>
            </Box>
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
