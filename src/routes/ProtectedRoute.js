import React from "react";
import { Redirect, Route } from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";
import ProtectedLayout from "../layouts/ProtectedLayout";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthenticated) {
        return (
          <ProtectedLayout>
            <Component {...props} />
            
          </ProtectedLayout>
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/for-you",
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

export default ProtectedRoute;
