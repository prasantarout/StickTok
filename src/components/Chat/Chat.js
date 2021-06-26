import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import { Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Link,
  Text,
} from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Chat = () => {
  return (
    <Flex
      width="full"
      height="full"
      overflow="auto"
      p="7"
      bg="#FCFAFA"
      direction={["column", "column", "column", "row"]}
    >
      <Box
        bg="#FFFFFF"
        w={[
          "100%", // 30em-48em
          "100%",
          "100%",
          "28%", // 62em+
        ]}
        h={[
          "fit-content", // 30em-48em
          "fit-content",
          "fit-content",
          "90%", // 62em+
        ]}
        justifyContent="flex-end"
        borderRadius="lg"
      >
        <Flex p="5">
          <Heading fontSize="25">Messages</Heading>
          <Spacer />
          <Icon paddingTop="3px" w="8" h="8" as={AiOutlineSetting} />
        </Flex>
        <hr></hr>
        <Spacer />
        {[0, 1, 2, 3].map((index) => (
          <Link key={index} className="chatList" color="black">
            <Box bg={index === 0 ? "#E8E7E7" : "transparent"} px={7} py={4}>
              <Avatar w="8" h="8" />
              <Link pl="15px">Arshad</Link>
            </Box>
            <hr></hr>
          </Link>
        ))}
      </Box>
      <Spacer />
      <Box
        bg="#FCFAFA"
        w={[
          "100%", // 30em-48em
          "100%",
          "100%",
          "70%", // 62em+
        ]}
        h={[
          "fit-content", // 30em-48em
          "fit-content",
          "fit-content",
          "84%", // 62em+
        ]}
      >
        <Flex p="2" border="1px" borderTopRadius="8px">
          <Flex ml="3" mt="3">
            <Icon as={Avatar} w={9} h={9} />
            <Heading size="sm" ml="5" mt="2">
              Arshad Khan
            </Heading>
          </Flex>

          <Spacer />
          <IconButton as={SearchIcon} w={6} h={8} mt="3" mr="9px" bg="none" />
          <IconButton
            as={BiDotsVerticalRounded}
            rounded="full"
            w={12}
            h={12}
            mt="1"
            bg="none"
          />
        </Flex>
        <Spacer />
        <Box
          h="96%"
          className="background_img_chat"
          w="100%"
          borderTopRadius="0px"
          overflow="auto"
        >
          <Center
            paddingTop="23px"
            fontFamily="sans-serif"
            fontSize="18px"
            fontWeight="light"
          >
            <Text
              p="3px"
              bg="#CAD6DB"
              borderRadius="md"
              textAlign="center"
              width="15%"
            >
              Monday
            </Text>
          </Center>

          <Grid m="6%">
            <Flex justify="flex-end">
              <Text
                fontWeight="semibold"
                pt="2"
                pl="4"
                bg="#FFFFFF"
                borderRadius="15px"
                textAlign="left"
                width="27%"
                fontSize="19px"
              >
                hii
                <Text
                  textAlign="end"
                  fontSize="14px"
                  fontWeight="semibold"
                  m="4px"
                >
                  12.30pm
                </Text>
              </Text>
            </Flex>
            <Spacer />
            <Flex mt="4">
              <Text
                fontWeight="semibold"
                pt="3"
                pl="4"
                bg="#FFFFFF"
                borderRadius="15px"
                textAlign="left"
                width="27%"
                fontSize="19px"
              >
                hello!!
                <Text
                  textAlign="end"
                  fontSize="14px"
                  fontWeight="semibold"
                  m="4px"
                >
                  12.30pm
                </Text>
              </Text>
            </Flex>

            <Flex mt="4" justify="flex-end">
              <Text
                fontWeight="semibold"
                pt="3"
                pl="4"
                bg="#FFFFFF"
                borderRadius="15px"
                textAlign="left"
                width="27%"
                fontSize="19px"
              >
                How r u
                <Text
                  textAlign="end"
                  fontSize="14px"
                  fontWeight="semibold"
                  m="4px"
                >
                  12.31pm
                </Text>
              </Text>
            </Flex>
            <Flex mt="4">
              <Text
                fontWeight="semibold"
                pt="2"
                pl="4"
                bg="#FFFFFF"
                borderRadius="15px"
                textAlign="left"
                width="27%"
                fontSize="19px"
              >
                Fine!
                <Text
                  textAlign="end"
                  fontSize="14px"
                  fontWeight="semibold"
                  m="4px"
                >
                  12.31pm
                </Text>
              </Text>
            </Flex>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};

export default Chat;
