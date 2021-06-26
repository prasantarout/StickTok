import React, { useEffect, useState } from "react";
import { Link as RouterLink, Redirect, useHistory } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  HStack,
  FormControl,
  FormLabel,
  Button,
  Text,
  PinInput,
  PinInputField,
  InputGroup,
  Input,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

function LoginForm() {
  const [loginType, setLoginType] = useState("phone");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleLogin = async (e) => {
    e.preventDefault();

      let data = { email, password };
      const result = await axios.post(
        "http://13.232.183.235:3333/api/authentication/login",data);
       
      localStorage.setItem("token", result.data);
      
      if (result.status === 200) {
        localStorage.setItem("isAuthenticated", true);
      }

      let token = localStorage.token;
      if (token=token) setLoggedIn(true);

      setLoggedIn({ loggedIn: true });
      if (true) {
        // return <redirect to="/for-you"/>
        window.location.href = "/for-you";
      }
  };

  
  return (
    <form onSubmit={handleLogin}>
      {loginType === "phone" ? (
        <>
          <FormControl mt={6}>
            <HStack justify="space-between">
              <FormLabel>Phone</FormLabel>
              <FormLabel
                className="alt__login__link"
                color="gray.500"
                onClick={() => setLoginType("email")}
              >
                Log in with email
              </FormLabel>
            </HStack>
            <PhoneInput
            onChange={(e)=>console.log(setMobileNumber({mobileNumber:e.target.value}))}
              country={"in"}
              preferredCountries={["in", "us"]}
              containerClass="phone__input__wrapper"
              inputClass="phone__input"
              buttonClass="phone__input__btn"
              dropdownClass="phone__input__dropdown"
              
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel>Enter 4-digit code</FormLabel>
            <HStack justify="space-between">
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <Button>Send Code</Button>
            </HStack>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl mt={6}>
            <HStack justify="space-between">
              <FormLabel>Email</FormLabel>
              <FormLabel
                className="alt__login__link"
                color="gray.500"
                onClick={() => setLoginType("phone")}
              >
                Log in with phone
              </FormLabel>
            </HStack>
            <Input
              type="email"
              placeholder="username@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  type="button"
                  variant="ghost"
                  onClick={handleClick}
                >
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text mt={2} textAlign="right">
              <Link as={RouterLink} color="gray.500" to="/forgot-password">
                Forgot Password?
              </Link>
            </Text>
          </FormControl>
        </>
      )}

      <Button width="full" className="form__submit__btn" mt={8} type="submit">
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
