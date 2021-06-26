import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/button";
import { CloseButton } from "@chakra-ui/close-button";
import Icon from "@chakra-ui/icon";
import "./Profile.scss";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/img/profile.png";
import ProfileImg1 from "../assets/img/1.jpg";
import Axios from "axios";
import axios from "axios";

const Profile = () => {
  // const [profile, setProfile] = useState({});

  // const Token =
  //   "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxMWMyNmExMTBjNGVmMmNhMDE2NTkiLCJtb2JpbGVOdW1iZXIiOiI5NTYxMjUyNDU5IiwiZW1haWwiOiJhYkBnbWFpbC5jb20iLCJkZXNpZ25hdGlvbiI6IlN0dWRlbnQiLCJzZXNzaW9uSWQiOiI2MGFmYTI4NjRiYWI4OGExZWU3ZTYyYjAiLCJpYXQiOjE2MjIxMjMxNDJ9.jveFYUqAR4LD707J2wcqNnfxUyxny9JbdmZm61Pkv-M";
  // const UrlProfile = "http://13.232.183.235:3333/api/authentication";

  // const AuthReq = axios.create({
  //   baseURL: UrlProfile,
  //   header: {
  //     Authorization: `Bearer ${Token}`,
  //   },
  // });
  // AuthReq.get(`${UrlProfile}/getProfile`)
  // .then((data) => {
  //       console.log("response data", data);
  //     })

  //     .catch((err)=>{
  //       console.log(err);
  //     })

  return (
    <Flex
      maxW="1200vw"
      w="full"
      h="full"
      direction={["column", "column", "column", "column"]}
    >
      <Box w={["100%", "100%", "100%", "100%"]} h="29%">
        <Flex display="flex">
          <Image
            mt={8}
            ml={16}
            borderRadius="full"
            boxSize="85px"
            src={ProfileImg}
            alt="Profile"
          />
          <Box display="grid" mt="6" ml={9}>
            <Text
              font-family="Roboto"
              fontSize="24px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="56px"
            >
              Azam3213454
              <IconButton
                background="none"
                w={2}
                h={4}
                mb={2}
                ml={3}
                as={ExternalLinkIcon}
              />
            </Text>

            <Text
              mt={-4}
              fontFamily="heading"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="32px"
              textAlign="left"
            >
              KingKhan
            </Text>

            <Box
              display="flex"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="72px"
              letterSpacing="0em"
              textAlign="left"
              mt={4}
              ml={-135}
            >
              <span>0</span>
              <Text ml={2}>Following</Text>
              <Spacer ml={6} /> <span>0</span>
              <Text ml={2}>Followers</Text>
              <Spacer ml={6} /> <span>0</span>
              <Text ml={2}>Likes</Text>
            </Box>
          </Box>
        </Flex>
        <Grid>
          <Text
            ml={50}
            mt={-4}
            fontStyle="Regular"
            fontWeight="640"
            fontSize="19px"
            lineHeight="22px"
          >
            Born to express, not to impress
          </Text>
        </Grid>
      </Box>

      <Box w={["90%", "90%", "90%", "100%"]} h="66%" className="profile_Div">
        <Grid justifyContent="space-evenly" display="flex" mt={5}>
          <Button
            color="none"
            bg="none"
            _hover="none"
            size="lg"
            w={10}
            h={19.5}
            fontSize={20}
            fontWeight="bolder"
            mt={5}
          >
            Videos
          </Button>
          <Button
            color="none"
            w={10}
            h={21}
            fontSize={20}
            bg="none"
            _hover="none"
            fontWeight="bolder"
            size="lg"
            mt={5}
          >
            Liked
          </Button>
        </Grid>
        <Box className="column" display h="91.5%" overflow="auto">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27,
          ].map((index) => (
            <img src={ProfileImg1} />
          ))}
        </Box>
      </Box>
    </Flex>
  );
};
export default Profile;
