import React from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";

import {
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  HStack,
  Link,
} from "@chakra-ui/react";

import "./Auth.scss";

import AuthBanner from "../../assets/img/auth-banner.png";
import GoogleIcon from "../../assets/img/google-icon.png";
import FacebookIcon from "../../assets/img/facebook-icon.png";

import SignupForm from "./components/SignupForm";
import SocialAuthButton from "../../components/SocialAuthButton";

function Signup() {
  const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();
    
    history.push("/verify-email");
  };

  return (
    <Flex width="full">
      <Box className="auth__banner">
        <img
          className="auth__banner__img"
          src={AuthBanner}
          alt="Authentication Banner"
        />
      </Box>

      <Box className="form__wrapper">
        <Box textAlign="center">
          <Heading>Sign up for Sticfocus</Heading>
          <Text mt={3} color="gray.500">
            Create a profile, follow other accounts, make your own videos, and
            more.
          </Text>
        </Box>

        <Box mt={10} textAlign="center">
          <SignupForm handleSignup={handleSignup} />
        </Box>

        <Box mt={8}>
          <HStack justify="center" className="social__auth__button__wrapper">
            <SocialAuthButton
              socialIconImage={GoogleIcon}
              text="Continue with"
              socialName="Google"
            />
            <SocialAuthButton
              socialIconImage={FacebookIcon}
              text="Continue with"
              socialName="Facebook"
            />
          </HStack>
        </Box>

        <Text mt={8} textAlign="center" color="gray.500">
          By continuing you agree to Sticfocus’s{" "}
          <Link color="brand.800" href="#">
            Terms of Service
          </Link>{" "}
          and confirm that you have read Sticfocus’s{" "}
          <Link color="brand.800" href="#">
            Privacy Policy
          </Link>
          .
        </Text>

        <Divider orientation="horizontal" mt={6} mb={6} />

        <Text mt={8} textAlign="center">
          Already have an accout?{" "}
          <Link as={RouterLink} to="/login" color="brand.800" href="#">
            Log in
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default Signup;
