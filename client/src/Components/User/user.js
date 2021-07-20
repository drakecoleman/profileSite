import React, { useState } from "react";
import DivforButton from "./../Button/DivforButton";
import Button from "../Button/button";
import { useHistory } from "react-router-dom";
import SimpleFileUpload from "react-simple-file-upload";
import "./user.css";

function UserProfile() {
  const history = useHistory();
  const [edit, changeEdit] = useState(false);

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
  let editProfilePicture = (e) => {
    changeEdit(true);
  };
  let doneProfilePicture = () => {
    changeEdit(false);
  };

  return (
    <section>
      <div className="buttonDiv">
        <DivforButton
          id="butt"
          button={
            <React.Fragment>
              <Button id="but" text="Home" link="/" />
              <Button text="Logout" link="/logout" />
            </React.Fragment>
          }
        />
      </div>

      <img src={file} className="profilePicture" />
      {edit ? (
        [
          <SimpleFileUpload
            apiKey={process.env.REACT_APP_API_KEY}
            preview="false"
            onSuccess={setFile}
            className="uploader"
          />,
          <DivforButton
            button={<Button onClick={doneProfilePicture} text="done" />}
          />,
        ]
      ) : (
        <DivforButton
          button={<Button onClick={editProfilePicture} text="Edit" />}
        />
      )}
    </section>
  );
}

export default UserProfile;
