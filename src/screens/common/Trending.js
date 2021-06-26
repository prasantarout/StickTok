import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  LinkOverlay,
  ListIcon,
  Text,
  VStack,
} from "@chakra-ui/react";

import courseBanner from "../../assets/img/course-banner.jpg";

import "./Common.scss";

import Carousel from "react-elastic-carousel";
import axios from "axios";
import TrendingUser from "./components/TrendingUser"
import { GoDash, GoPrimitiveDot, GoVerified } from "react-icons/go";
import { BsChatDots, BsDot } from "react-icons/bs";
import { IconBase } from "react-icons/lib";
import { GrNotification } from "react-icons/gr";

const AuthorCard = ({ name, title, status, img, isVerifeid = false }) => (
  <VStack boxShadow="lg" p="4" pl="6" pr="6" borderRadius="4" m="4">
    <Avatar size="xl" bg="gray.200" overflowY="hidden">
      <img src={img} />
    </Avatar>

    <Box textAlign="center">
      {status && <GoPrimitiveDot color="green" size="19" />}
      <Text fontSize="18" fontWeight="500">
        {name}
      </Text>

      <Text color="gray.500">{title}</Text>

      <Button colorScheme="blue" mt={4}>
        View Profile
      </Button>
    </Box>
  </VStack>
);

const CourseCard = ({ title, description, hashtags, list }) => (
  <VStack maxW="300" boxShadow="lg" p="2" borderRadius="4" m="4">
    <Box size="xl" bg="gray.200" overflowY="hidden" borderRadius="41">
      <img src={list["fileURL"]} borderRadius={21} alt="" />
    </Box>
    <Box mt="4">
      <Text fontSize="18" fontWeight="500">
        {title}
      </Text>
      <Text color="gray.500"> {hashtags}</Text>
      <Text color="gray.500"> {description}</Text>
      <HStack mt="6" mb="6">
        <Button variant="outline">View Details</Button>
        <Button colorScheme="blue" mt={4}>
          Enroll Now
        </Button>
      </HStack>
    </Box>
  </VStack>
);

function Trending() {
  const [course, setCourse] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios.get("http://13.232.183.235:3333/api/course/get").then((res) => {
      setCourse(res.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://13.232.183.235:3333/api/author/get").then((res) => {
      console.log(res.data.data);
      setAuthor(res.data.data);
    });
  }, []);

  return (
<div className="trending_user">
  <div className="trending_user_name">
    <TrendingUser />
  </div>
</div>   
  )
}

export default Trending;
