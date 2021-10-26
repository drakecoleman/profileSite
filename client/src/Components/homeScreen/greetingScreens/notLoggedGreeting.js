import React, { useState } from "react";
import DivforButton from "../../Button/DivforButton";
import Button from "../../Button/button";
import Video from "../../../assets/homeVideo.mp4";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import RegisterBoard from "../../Register/registerBoard";
import LoginBoard from "../../Login/loginBoard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import "./greetingStyles.css";

function NotLogged() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleClickOpen = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return [
    <div className="videoDiv">
      <div className="buttDiv">
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openRegister}
          onClose={handleCloseRegister}
          sx={{ border: "solid black" }}
        >
          <DialogContent sx={{ p: 0, borderRadius: "2vw" }}>
            <RegisterBoard />
          </DialogContent>
        </Dialog>
        <Dialog
          id="imp"
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={openLogin}
          onClose={handleCloseLogin}
          sx={{ border: "solid black" }}
        >
          <DialogContent sx={{ p: 0, borderRadius: "2vw" }}>
            <LoginBoard />
          </DialogContent>
        </Dialog>

        <h1 className="felix">fELIX</h1>
        <h2 className="felixSubText">A Social Platform</h2>
        <h3 className="felixSubText">Designed by YOU</h3>

        <DivforButton
          className="dis"
          button={
            <React.Fragment>
              <Button key="3" text="Login" onClick={handleLoginOpen} />,
              <Button key="4" text="Register" onClick={handleClickOpen} />
            </React.Fragment>
          }
        />
      </div>
      <video muted autoPlay loop id="myVideo">
        <source src={Video} type="video/mp4" />
      </video>
    </div>,
  ];
}
export default NotLogged;
