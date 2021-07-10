import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

function Login() {
  const history = useHistory();
  function loginChange(e) {
    const { name, value } = e.target;
    changeLogin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function submission(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(login),
    })
      .then(function (response) {
        console.log(response.status); // Will show you the status
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }

        return history.push("/user");
      })
      .catch((err) => console.log(err));
    changeLogin({ email: "", password: "" });
  }

  const [login, changeLogin] = useState({ email: "", password: "" });
  return (
    <form>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={loginChange}
        value={login.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={loginChange}
        value={login.password}
      />
      <button onClick={submission} type="submit">
        Submit
      </button>
    </form>
  );
}
export default Login;
