import React, { useState } from "react";
import DivforButton from "./Button/DivforButton";
import Button from "./Button/button";
import { useParams } from "react-router-dom";

function Visitor() {
  // const [name, changeName] = useState();
  //   const params = useParams();

  //   fetch("http://localhost:3000/visitor", {
  //     method: "GET",
  //     credentials: "include",
  //     withCredentials: true,

  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(params.url),
  //   })
  //     .then( (response) =>{
  // console.log(response))

  //     .catch((err) => console.log(err));

  return <h1>Hello</h1>;
}

export default Visitor;
