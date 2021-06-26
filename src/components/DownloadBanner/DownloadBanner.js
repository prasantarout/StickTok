import React from "react";
import { Flex, Box, Text, HStack } from "@chakra-ui/react";

import DownloadImage from "../../assets/img/download-banner.png";
import GooglePlay from "../../assets/img/google-play.svg";
import AppStore from "../../assets/img/app-store.svg";
import "./DownloadBanner.scss";

function DownloadBanner() {
  return (
    <Flex p="8" direction="column">
      <Box>
        <img src={DownloadImage} alt="Download Banner" />
      </Box>
      <Text mt={5} fontWeight="500" color="gray.500">
        Download Sticfocus on your phone from the below links
      </Text>
      <HStack mt={5}>
        <a
          target="_blank"
          href="https://play.google.com/store"
          rel="noreferrer"
        >
          <img src={GooglePlay} alt="Google Play" />
        </a>
        <a
          target="_blank"
          href="https://www.apple.com/in/app-store/"
          rel="noreferrer"
        >
          <img src={AppStore} alt="App Store" />
        </a>
      </HStack>
    </Flex>
  );
}

export default DownloadBanner;
