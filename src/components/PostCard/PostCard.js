import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { GoVerified } from "react-icons/go";
import {
  BsHeart,
  BsChatDots,
  BsReply,
  BsMusicNote,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsPlayFill,
  BsPauseFill,
} from "react-icons/bs";

import WhatsappIcon from "../../assets/img/option-whatsapp.png";
import FacebookIcon from "../../assets/img/option-fb.png";
import TwitterIcon from "../../assets/img/option-twitter.png";
import EmailIcon from "../../assets/img/option-email.png";
import URLIcon from "../../assets/img/option-url.png";
import AddIcon from "../../assets/img/plus.svg";
import MusicDisc from "../../assets/img/cd.svg";
import MusicNote from "../../assets/img/musical-note.svg";
import MusicNote2 from "../../assets/img/musical-note-2.svg";

import "./PostCard.scss";
import axios from "axios";

function PostCard({ name,data,videoSource, isVerified = false}) {
  const [videoState, setVideoState] = useState("playing");
  const [volumeState, setVolumeState] = useState("muted");


  let videoElement = null;

  const onVolumeStateChangeHandler = () => {
    if (volumeState === "muted") {
      videoElement.muted = false;

      setVolumeState("volume");
    } else {
      videoElement.muted = true;

      setVolumeState("muted");
    }
  };

  const onVideoStateChangeHandler = () => {
    if (videoState === "playing") {
      videoElement.pause();
      setVideoState("paused");
    } else {
      videoElement.play();
      setVideoState("playing");
    }
  };

  return (
    <Flex direction="column" className="post__card">
      <HStack className="post__card__header">
        <Avatar size="md" bg="gray.200" className="post__card__user__avatar" />

        <VStack align="flex-start" className="post__card__user__details">
          <Text className="post__card__user__name">
            @{name} {isVerified && <GoVerified />}
          </Text>

          <Button size="sm" className="post__card__follow__btn">
            <img src={AddIcon} /> FOLLOW
          </Button>
        </VStack>
        
        </HStack>

      <Box className="post__card__description">
      <Text>description</Text>
      </Box>

      <Flex className="post__card__video__container">
      
        <Box className="post__card__video__player__container">
          <video
            autoPlay
            muted
            loop
            ref={(video) => {
              videoElement = video;
            }}
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <HStack className="video__action__buttons" justify="space-between">
            <Box
              className="play__pause__btn"
              onClick={onVideoStateChangeHandler}
            >
              {videoState === "playing" ? <BsPauseFill /> : <BsPlayFill />}
            </Box>
            <Box className="volume__btn" onClick={onVolumeStateChangeHandler}>
              {volumeState === "muted" ? (
                <BsFillVolumeMuteFill />
              ) : (
                <BsFillVolumeUpFill />
              )}
            </Box>
          </HStack>
        </Box>

        <Flex className="post__card__video__actions__container">
              <>
              <VStack className="action" likeStatus={true}>
              <BsHeart/>
               <Text>{data.likeCount}</Text>
              </VStack>
              
              <VStack className="action">
              <BsChatDots/>
              <Text>{data.commentCount}</Text>
            </VStack>
              </>
            
          
          
          {/* <Menu placement="top">
            <MenuButton as={VStack} className="action">
              <BsReply />
              <Text>18.2k</Text>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <img src={WhatsappIcon} />
                <Text ml="4">Share on Whatsapp</Text>
              </MenuItem>
              <MenuItem>
                <img src={FacebookIcon} />
                <Text ml="4">Share on Facebook</Text>
              </MenuItem>
              <MenuItem>
                <img src={TwitterIcon} />
                <Text ml="4">Share on Twitter</Text>
              </MenuItem>
              <MenuItem>
                <img src={EmailIcon} />
                <Text ml="4">Share on Email</Text>
              </MenuItem>

              <MenuItem>
                <img src={URLIcon} />
                <Text ml="4">Copy Link</Text>
              </MenuItem>
            </MenuList>
          </Menu> */}
        </Flex>
      </Flex>

      <HStack className="music__info__wrapper" justifyContent="space-between">
        <Box className="musical__disc">
          <img className="disc" src={MusicDisc} />
          <img className="note note__two" src={MusicNote2} />
          <img className="note" src={MusicNote} />
        </Box>
        <HStack>
          {/*<Text>original sound - Shoaib Sayyed</Text>
          <BsMusicNote />*/}
        </HStack>
      </HStack>
    </Flex>
  );
}

export default PostCard;
