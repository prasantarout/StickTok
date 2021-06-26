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

import LoginForm from "./components/LoginForm";
import SocialAuthButton from "../../components/SocialAuthButton";

function Login() {
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
          <Heading>Log in to Sticfocus</Heading>
          <Text mt={3} color="gray.500">
            Manage your account, check notifications, comment on videos, and
            more.
          </Text>
        </Box>

        <Box mt={10} textAlign="center">
          <LoginForm />
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

        <Divider orientation="horizontal" mt={10} mb={6} />

        <Text mt={8} textAlign="center">
          Don't have an accout?{" "}
          <Link as={RouterLink} to="/signup" color="brand.800" href="#">
            Sign up
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default Login;
