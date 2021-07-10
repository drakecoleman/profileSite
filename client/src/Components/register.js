import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

function RegisterForm(props) {
  const history = useHistory();
  function submission(e) {
    if (fullname.pass1 !== fullname.pass2) {
      e.preventDefault();
      alert("Passwords do not match");
    } else {
      e.preventDefault();
      fetch("http://localhost:3000/register", {
        method: "POST",
        credentials: "include",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullname),
      })
        .then(function (response) {
          console.log(response.status); // Will show you the status
          if (!response.ok) {
            throw new Error("HTTP status " + response.status);
          }

          return history.push("/login");
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
    changeName({ first: "", last: "", email: "", pass1: "", pass2: "" });
  }

  function fChange(e) {
    const { name, value } = e.target;
    changeName((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  const [fullname, changeName] = useState({
    first: "",
    last: "",
    email: "",
    pass1: "",
    pass2: "",
  });
  return (
    <form>
      <input
        placeholder="First Name"
        name="first"
        type="text"
        value={fullname.first}
        onChange={fChange}
      />
      <input
        onChange={fChange}
        placeholder="Last Name"
        name="last"
        type="text"
        value={fullname.last}
      />
      <input
        onChange={fChange}
        value={fullname.email}
        type="email"
        placeholder="Email"
        name="email"
      />
      <input
        onChange={fChange}
        value={fullname.pass1}
        type="password"
        placeholder="Password"
        name="pass1"
      />
      <input
        onChange={fChange}
        value={fullname.pass2}
        type="password"
        placeholder="Reenter Password"
        name="pass2"
      />

      <button onClick={submission} type="submit">
        Submit
      </button>
    </form>
  );
}
export default RegisterForm;
