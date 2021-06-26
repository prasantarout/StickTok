import React from "react";
import { useHistory } from "react-router";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";

import "./Auth.scss";

import EmailVerifiedIcon from "../../assets/img/email-verified.png";

function EmailVerified() {
  const history = useHistory();

  const handleLoginToContinueButton = () => {
    history.push("/login");
  };

  return (
    <Flex justify="center" align="center" direction="column" minH="90vh" p={5}>
      <Box textAlign="center" mb={10}>
        <Heading>Email verified</Heading>
        <Text mt={3} color="gray.500">
          Yahoo! Your new account has been successfully verified
        </Text>
      </Box>

      <Box className="email__sent__wrapper">
        <img src={EmailVerifiedIcon} alt="Email Verified Icon" />
      </Box>

      <Box textAlign="center" mt={10}>
        <Text mt={1} color="gray.500" maxW="600px">
          You can now login to your account to create, like, comment, and share
          videos. We're excited to have you get started.
        </Text>

        <Button
          colorScheme="brand"
          mt={10}
          className="login__to__continue__button"
          onClick={handleLoginToContinueButton}
          
        >
          Log in to continue
        </Button>
      </Box>
    </Flex>
  );
}

export default EmailVerified;
