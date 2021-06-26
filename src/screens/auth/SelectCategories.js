import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import TopicCard from "./components/TopicCard";
import "./Auth.scss";
import axios from "axios";

function SelectCategories() {

  

  const [categories, setCategories] = useState([
    {
      id: "1",
      title: "Arts",
      isSelected: false,
    },
    {
      id: "2",
      title: "Business",
      isSelected: true,
    },
    {
      id: "3",
      title: "Civics",
      isSelected: false,
    },
    {
      id: "4",
      title: "English",
      isSelected: true,
    },
    {
      id: "5",
      title: "Environemt",
      isSelected: true,
    },
    {
      id: "6",
      title: "Economics",
      isSelected: false,
    },
    {
      id: "7",
      title: "Geometry",
      isSelected: false,
    },
    {
      id: "8",
      title: "Geography",
      isSelected: true,
    },
  ]);

  const onSelectClickHandler = (id) => {
    let obj = categories[id - 1];

    obj.isSelected = !obj.isSelected;

    let tempArray = categories.filter((item) => {
      return id === item.id ? obj : item;
    });

    setCategories(tempArray);
  };

  return (
    <Box>
      <Box width="full" shadow="xs" p="4" pl="10" pr="10">
        <Heading>Sticfocus</Heading>
      </Box>
      <Box mt="10" p="4" pl="10" pr="10">
        <Text fontSize="2xl">Choose Intrested Topics</Text>
      </Box>
      <Flex p="4" pl="10" pr="10" flexWrap="wrap">
        {categories.map((item) => (
          <TopicCard
            key={item.id}
            id={item.id}
            title={item.title}
            isSelected={item.isSelected}
            onSelectClickHandler={onSelectClickHandler}
          />
        ))}
      </Flex>
      <Box textAlign="right" p="10">
        <Link as={RouterLink} to="/" className="categories__next__btn">
          Next
        </Link>
      </Box>
    </Box>
  );
}

export default SelectCategories;
