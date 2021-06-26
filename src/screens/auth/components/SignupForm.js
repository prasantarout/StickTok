import React, { useEffect, useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  HStack,
  FormControl,
  FormLabel,
  Button,
  NumberInput,
  NumberInputField,
  Select,
  PinInput,
  PinInputField,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Redirect, useHistory } from "react-router";

function SignupForm() {
  const [signupType, setSignupType] = useState("email");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [result, setResult] = useState([]);
  const [sign, setSignUp] = useState(false);
  const history=useHistory()


  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleClick = () => setShow(!show);
  
  const handleSignup = (e) => {
    e.preventDefault();

    const data1 = {
      email: email,
      password: password,
      mobileNumber: mobileNumber,
    };
    const result=axios.post("http://13.232.183.235:3333/api/authentication/register",data1)
    .then((res)=>{
      console.log(res);
    history.push("/login")
    })
    }

  return (
    <form onSubmit={handleSignup}>
      <FormControl>
        <FormLabel>When's your birthday?</FormLabel>
        <HStack spacing="8px">
          <NumberInput min={1} max={31} size="md" maxW={24}>
            <NumberInputField placeholder="Date" />
          </NumberInput>

          <Select placeholder="Month">
            {months.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </Select>

          <NumberInput size="md" maxW={24}>
            <NumberInputField placeholder="Year" />
          </NumberInput>
        </HStack>
      </FormControl>

      {signupType === "email" ? (
        <>
          <FormControl mt={6}>
            <HStack justify="space-between">
              <FormLabel>Phone</FormLabel>
              <FormLabel
                className="alt__signup__link"
                color="gray.500"
                onClick={() => setSignupType("phone")}
              >
                Sign up with email
              </FormLabel>
            </HStack>
            <PhoneInput
              country={"in"}
              preferredCountries={["in", "us"]}
              containerClass="phone__input__wrapper"
              inputClass="phone__input"
              buttonClass="phone__input__btn"
              dropdownClass="phone__input__dropdown"
              onChange={value=>setMobileNumber(value)}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel >Enter 4-digit code</FormLabel>
            <HStack justify="space-between">
              <HStack>
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <Button >Send Code</Button>
            </HStack>
          </FormControl>
        </>
      ) :  (
        <>
          <FormControl mt={6}>
            <HStack justify="space-between">
              <FormLabel>Email</FormLabel>
              <FormLabel
                className="alt__signup__link"
                color="gray.500"
                onClick={() => setSignupType("email")}
              >
                Sign up with phone
              </FormLabel>
            </HStack>
            <Input
              type="email"
              placeholder="username@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="*******"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
          </FormControl>
        </>
      )}

      <Button width="full" className="form__submit__btn" mt={8} type="submit">
        Sign Up
      </Button>
    </form>
  );
}

export default SignupForm;
