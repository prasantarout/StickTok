import React from "react";
import { Route } from "react-router";
import ProtectedLayout from "../layouts/ProtectedLayout";

const CommonRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <ProtectedLayout>
        <Component {...props} />
      </ProtectedLayout>
    )}
  />
);

export default CommonRoute;
