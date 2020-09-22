import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, value, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(value);
        if (true) {
          return <Component {...props} {...rest} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
