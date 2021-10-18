// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import DivforButton from "./Button/DivforButton";
// import Button from "./Button/button";

// function Login() {
//   const history = useHistory();
//   function loginChange(e) {
//     const { name, value } = e.target;
//     changeLogin((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   }
//   let CheckifLoggedIn = () => {
//     fetch("http://localhost:3000/user", {
//       method: "GET",
//       credentials: "include",
//       withCredentials: true,

//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(function (response) {
//         if (!response.ok) {
//           return;
//         } else {
//           return history.push("/user");
//         }
//       })
//       .catch((err) => console.log(err));
//   };
//   CheckifLoggedIn();

//   function submission(e) {
//     e.preventDefault();
//     fetch("http://localhost:3000/login", {
//       method: "POST",
//       credentials: "include",
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify(login),
//     })
//       .then(function (response) {
//         if (!response.ok) {
//           changeLogin({ email: "", password: "" });
//           throw new Error("HTTP status " + response.status);
//         }
//         return history.push("/");
//       })
//       .catch((err) => console.log(err));
//   }

//   const [login, changeLogin] = useState({ email: "", password: "" });
//   return (
//     <div>
//       <form>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={loginChange}
//           value={login.email}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={loginChange}
//           value={login.password}
//         />
//         <button onClick={submission} type="submit">
//           Submit
//         </button>
//       </form>
//       <DivforButton
//         button={
//           <React.Fragment>
//             <Button text="Home" link="/" />
//             <Button text="Register" link="/register" />
//           </React.Fragment>
//         }
//       />
//     </div>
//   );
// }
// export default Login;
