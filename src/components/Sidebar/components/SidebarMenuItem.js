import React from "react";
import { Text, HStack } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

function SidebarMenuItem({ path, icon, text }) {
  return (
    <NavLink
      to={`/${path}`}
      activeClassName="active"
      className="sidebar__menu__link"
    >
      <HStack width="full" className="sidebar__menu__item">
        {icon}
        <Text fontWeight="600">{text}</Text>
      </HStack>
    </NavLink>
  );
}

export default SidebarMenuItem;
