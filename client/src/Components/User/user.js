import React, { useState } from "react";
import DivforButton from "./../Button/DivforButton";
import Button from "../Button/button";
import { useHistory } from "react-router-dom";
import SimpleFileUpload from "react-simple-file-upload";
import "./user.css";

function UserProfile() {
  const history = useHistory();

  // const [name, changeName] = useState();
  // const params = useParams();

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
        return history.push("/login");
      } else {
        return;
      }
    })
    .catch((err) => console.log(err));
  // https://{server}.gofile.io/uploadFile
  const [file, setFile] = useState(
    "https://static.files-simplefileupload.com/atsdvx264ufd6mn1dj6x0avb9l35/yourimage.jpeg"
  );
  let clicker = (e) => {
    e.preventDefault();
    console.log(file);
  };

  return (
    <h1>
      <DivforButton
        className="buttonDiv"
        button={
          <React.Fragment>
            <Button text="Home" link="/" />
            <Button text="Logout" link="/logout" />
            <Button text="Edit" />
          </React.Fragment>
        }
      />
      <form>
        <button onClick={clicker}>Submit</button>

        <SimpleFileUpload
          apiKey={process.env.REACT_APP_API_KEY}
          preview="false"
          onSuccess={setFile}
        />
        <img src={file} height="400" width="400" />
      </form>
    </h1>
  );
}

export default UserProfile;
