import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Signin.css";
import { connect } from "react-redux";

function Signin(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  console.log(login);
  function handleClick() {
    console.log("login:", login);
    if (login.username === "hampi" && login.password === "raja") {
      const action = {
        type: "LOGIN",
        payload: login.username,
      };
      console.log("action:", action);
      props.dispatch(action);
    }
  }
  function handleChange(event) {
    const { name, value } = event.target;

    // setLogin({
    //   [event.target.name]: event.target.value,
    // });
    setLogin((prevValue) => {
      if (name === "username") {
        return {
          username: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          username: prevValue.username,
          password: value,
        };
      }
    });
  }

  // if (props.user) {
  //   return <Redirect to="/" />;
  // }
  return (
    <div className="signin-container">
      <div>Please Signin</div>
      {/* <input onChange={props.onChange} name="username" />
      <input onChange={props.onChange} name="password" type="password" /> */}
      <input onChange={handleChange} name="username" />
      <input onChange={handleChange} name="password" type="password" />
      {/* <button onClick={props.onClick}>signin</button> */}
      <button onClick={handleClick}>signin</button>
    </div>
  );
}

const mapDisptachToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(null, mapDisptachToProps)(Signin);
