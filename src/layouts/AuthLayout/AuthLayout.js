import React, { Fragment } from "react";

import { Box } from "@chakra-ui/react";

import "./AuthLayout.scss";

const AuthLayout = ({ children }) => {
  return (
    <Fragment>
      {children}
      {/* <header>
        <h3>Sticfocus</h3>
      </header> 
      <Box>{children}</Box>
      <Chat/> 
     <footer>
        <h3>footer</h3>
      </footer> */}
    </Fragment>
  );
};

export default AuthLayout;
