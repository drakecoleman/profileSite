import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import picture from "../../assets/yourimage.jpeg";
import "./cardStyles.css";
import MailIcon from "@material-ui/icons/Mail";
import ChatBox from "./../Chat/chatBox";
import CloseIcon from "@material-ui/icons/Close";
import { ShowProfileContext } from "./../../Context/context";
import io from "socket.io-client";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Profile(props) {
  const { show, setShow } = useContext(ShowProfileContext);
  const close = () => {
    setShow(false);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return [
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={props.name}
        subheader={props.title}
        action={
          <IconButton onClick={close} aria-label="close">
            <CloseIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="394"
        image={picture}
        alt="Paella dish"
      />
      <CardContent>
        <p>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MailIcon color="primary" fontSize="large" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <ChatBox socketConnect={show} />
        </CardContent>
      </Collapse>
    </Card>,
  ];
}
export default Profile;
