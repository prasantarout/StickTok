import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

import "./SocialAuthButton.scss";

function SocialAuthButton({ socialIconImage, text, socialName, clickHandler }) {
  return (
    <Box className="social__auth__button">
      <HStack justify="space-evenly" onClick={clickHandler}>
        <img src={socialIconImage} alt="Social Icon" />
        <Text>
          <span className="text">{text} </span>
          <span className="social__name">{socialName}</span>
        </Text>
      </HStack>
    </Box>
  );
}

export default SocialAuthButton;
