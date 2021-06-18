import react from "react";
import video1 from "../assets/hiphop.mp4";

function Background() {
  return <video className="videoTag" src={video1} autoPlay loop muted />;
}
export default Background;
