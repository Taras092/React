import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

const Auth = props => {
  // isLoggedIn: boolean
  // isLoggin: boolean 
  return (
    <>
    <Login/>
    <Logout/>
    <Spinner/>
    </>
  );
};

export default Auth;

// REACT APPROACH
// 0. make a layout
// 1. split acomponents
// 2. static version in React
// 3. declare state and props
// 4. write logic