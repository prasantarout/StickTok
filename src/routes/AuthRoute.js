import React from "react";
import { Route, Redirect } from "react-router";
import Chat from "../components/Chat/Chat";
import AuthLayout from "../layouts/AuthLayout";

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthenticated) {
        return (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
          
          

        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }
      
    }}
  />
);

export default AuthRoute;
