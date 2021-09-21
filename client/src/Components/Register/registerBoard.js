import React from "react";
import "./register.css";
function registerBoard() {
  const Click = () => {
    document.getElementById("login-box").classList.add("display");
    document.querySelector(".invis").classList.remove("display");
  };

  return (
    <section className="section">
      <div className="login-box">
        <div class="left">
          <h1>Sign up</h1>

          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
          />

          <input type="submit" name="signup_submit" value="Sign me up" />
        </div>

        <div class="right">
          <i class="fas fa-times" onClick={Click}></i>
          <span class="loginwith">
            Sign in with
            <br />
            social network
          </span>

          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
      </div>
    </section>
  );
}
export default registerBoard;
