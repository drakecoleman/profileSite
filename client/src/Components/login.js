import { useState } from "react";
function Login() {
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
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
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
