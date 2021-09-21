import { useHistory } from "react-router-dom";

import "./user.css";

let Fetch = () => {
  let history = useHistory();
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
};

export default Fetch;
