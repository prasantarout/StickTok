import React from "react";
import { Flex, Text, HStack, Box, Divider } from "@chakra-ui/react";

import { FiHome } from "react-icons/fi";
import { RiUserHeartLine, RiFireLine } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { FaBeer } from "react-icons/fa";

import "./Sidebar.scss";
import SidebarMenuItem from "./components/SidebarMenuItem";
import SuggestedUser from "./components/SuggestedUser";

function Sidebar() {
  return (
    <Flex direction="column">
      <Box mb={10}mt={30}>
        <SidebarMenuItem icon={<FiHome />} text="For You" path="for-you" />
        <SidebarMenuItem
          icon={<RiUserHeartLine />}
          text="Following"
          path="followings"
        />
        <SidebarMenuItem
          icon={<AiOutlineFire />}
          text="Trending"
          path="trending"
        />
        <SidebarMenuItem
          icon={<FaBeer />}
          text="Category"
          path="Category"
        />
      </Box>

      <Divider />

      <Box className="sidebar__suggested__user__wrapper">
        <HStack width="full" className="sidebar__suggested__user__title">
          <Text fontWeight="600">Suggested Users</Text>
        </HStack>

        <Box className="suggested__user">
          <Box className="suggested__user__content">
            <SuggestedUser name="MS Dhoni" />
            <SuggestedUser name="Rishabh Pant" />
            <SuggestedUser name="Shreyas Iyer" />
            <SuggestedUser name="Rohit Sharma" />
            <SuggestedUser name="MS Dhoni" />
            <SuggestedUser name="Rishabh Pant" />
            <SuggestedUser name="Shreyas Iyer" />
            <SuggestedUser name="Rohit Sharma" />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Sidebar;
