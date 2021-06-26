import React from "react";
import { Text, HStack, Avatar } from "@chakra-ui/react";

function SuggestedUser({ name }) {
  return (
    <HStack width="full" className="sidebar__suggested__user">
      <Avatar size="sm" bg="gray.200" />
      <Text>{name}</Text>
    </HStack>
  );
}

export default SuggestedUser;
