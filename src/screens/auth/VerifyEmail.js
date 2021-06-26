import React from "react";

import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  useToast,
  Button,
} from "@chakra-ui/react";

import "./Auth.scss";

import EmailSent from "../../assets/img/email-sent.png";

function VerifyEmail() {
  const toast = useToast();

  return (
    <Flex justify="center" align="center" direction="column" minH="90vh" p={5}>
      <Box textAlign="center" mb={10}>
        <Heading>Verify your email</Heading>
        <Text mt={3} color="gray.500">
          You will need to verify your email to complete registration
        </Text>
      </Box>

      <Box className="email__sent__wrapper">
        <img src={EmailSent} alt="Email Sent Icon" />
        {/* <lord-icon
          src="https://cdn.lordicon.com//rhvddzym.json"
          trigger="loop"
          delay="200"
          colors="primary:#c40a2c,secondary:#08a88a"
          style={{ width: "128px", height: "128px" }}
        ></lord-icon> */}
      </Box>

      <Box textAlign="center" mt={10}>
        <Text mt={1} color="gray.500" maxW="700px">
          An email has been sent to <strong>shoaibsayyed@gmail.com</strong> with
          a link to verify your account. If you have not received the email
          after few minutes, please check your spam folder
        </Text>

        <Button
          colorScheme="brand"
          mt={10}
          className="resend__button"
          onClick={() =>
            toast({
              title: "Email sent again.",
              status: "success",
              position: "top",
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Resend Email
        </Button>
      </Box>
    </Flex>
  );
}

export default VerifyEmail;
