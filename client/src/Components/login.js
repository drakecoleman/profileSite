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
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: login,
      }),
    }).then((data) => console.log(data));
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
