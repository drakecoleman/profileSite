import React, { useState } from "react";
import DivforButton from "../../Button/DivforButton";
import Button from "../../Button/button";
import Video from "../../../assets/homeVideo.mp4";
import Dwight from "../../../assets/Question.jpeg";
import SecondBG from "../../../assets/secondBG.jpg";
import ThirdBG from "../../../assets/thirdBG.jpg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import RegisterBoard from "../../Register/registerBoard";
import "./greetingStyles.css";

function NotLogged() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [
    <div className="videoDiv">
      <div className="buttDiv">
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <RegisterBoard />
          </DialogContent>
        </Dialog>

        <h1 className="felix">fELIX</h1>
        <h4 className="felixSubText">A Social Platform</h4>
        <h4 className="felixSubText">Designed by YOU</h4>

        <DivforButton
          className="dis"
          button={
            <React.Fragment>
              <Button key="3" text="Login" link="/login" />,
              <Button key="4" text="Register" onClick={handleClickOpen} />,
            </React.Fragment>
          }
        />
      </div>
      <video muted autoPlay loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>

      <div className="Sec">
        <img src={SecondBG} className="backGround" alt="Dwight Shrute"></img>
        <h1 className="questions">I have a Question for you</h1>
        <img src={Dwight} className="Dwight" alt="Dwight Shrute"></img>
        <h1 className="questions">
          Why does your Facebook Profile look the exact same as everyone else's?
        </h1>
        <i className="fas fa-id-card"></i>
        <i className="fas fa-id-card"></i>
        <i className="fas fa-id-card"></i>
        <h1 className="questions">And your twitter Profile?</h1>
        <i className="fas fa-id-badge"></i>
        <i className="fas fa-id-badge"></i>
        <i className="fas fa-id-badge"></i>
        <h1 className="questions">
          ........and literally every other social media profile?
        </h1>
        <i className="fas fa-users"></i>
        <i className="fas fa-users"></i>
        <i className="fas fa-users"></i>
      </div>
      <div className="third">
        <h1 className="felix">Introducing fELIX</h1>
        <h5 className="felixSubText">
          A Modern Social Hangout, Updated constantly to adjust to the future,
          where other sites are adjusted just to keep up
        </h5>
        <h6 className="felixSubText">
          With easy to learn and understand controls, YOU adjust your profile to
          fit your current mood
        </h6>
        <img src={ThirdBG} className="backGround" alt="Neon BackGround"></img>
      </div>
    </div>,
  ];
}
export default NotLogged;
