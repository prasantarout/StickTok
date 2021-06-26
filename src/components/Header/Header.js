import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsCloudUpload } from "react-icons/bs";
import { GrChat } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

import "./Header.scss";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function Header(props) {

  const handleLogout=()=>{
    localStorage.setItem("isAuthenticated", false);
    window.location.href="/login"
  }

  return (
    <Flex
      width="full"
      boxShadow="xs"
      p="4"
      pl="8"
      pr="8"
      bg="white"
      justify="space-between"
      position="fixed"
      top="0"
      zIndex="1000"
    >
      <HStack>
        <Heading fontWeight="500" size="lg">
          Sticfocus
        </Heading>
      </HStack>

      <Box className="search__input__wrapper">
        <InputGroup>
          <Input
       
            placeholder="Search accounts & sounds"
            focusBorderColor="none"
          />
          <InputRightElement
            children={
              <IconButton
                aria-label="Search accounts & sounds"
                icon={<SearchIcon />}
                variant="outline"
              />
            }
          />
        </InputGroup>
      </Box>

      <Box>
        <HStack minW="150" justify="space-between">
          <Link exact to="/upload_video">
          <IconButton
            icon={<BsCloudUpload className="header__action__icon" />}
            variant="ghost"
            aria-label="Upload New Videos"
          /></Link>

          
          <Link to="/chat">
          <IconButton
            icon={<GrChat className="header__action__icon" />}
            variant="ghost"
            aria-label="Chats"
          />
          </Link>
          

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="User"
              variant="ghost"
              icon={<BiUser className="header__action__icon" />}
            />
            <MenuList>
            <Link to="/profile"><MenuItem  icon={<AiOutlineUser />}>Profile</MenuItem></Link>
              <Link to ="/course1"><MenuItem>Draft</MenuItem></Link>
              <Link to="/author"><MenuItem >Settings</MenuItem></Link>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Header;
