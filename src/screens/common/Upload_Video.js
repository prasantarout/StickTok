import { Button, ButtonGroup } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormLabel } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Img } from "@chakra-ui/image";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import { BsCloudUpload } from "react-icons/bs";

const Upload_Video = () => {

  const onFileLoad=()=>{}
  const handleSelect=()=>{
    alert("ad")
  }

  return (
    <Flex w="100%" h="100%" direction={["column", "column", "column", "row"]}>
      <Box w={["100%", "100%", "100%", "30%"]} mx="2" p="3">
        <Heading
          fontSize="25"
          lineHeight="80.03px"
          fontStyle="Roboto"
          fontWeight="700"
        >
          Upload Video
        </Heading>
        <Text
          marginTop="-6"
          fontSize={12}
          fontStyle="Roboto"
          fontWeight="600"
          lineHeight="28px"
          textAlign="left"
        >
          This video will be published to @31230858434
        </Text>

        <Box type="file"  className="DropDrag_file" onDragOver={(e)=>{e.preventDefault(); e.stopPropagation()}}
        onDrop={onFileLoad}
        onClick={handleSelect}
        onChange={e=>e.target.files}

          height="calc(100% - 115px)"
          border="1p"
          w="90%"
          left="24px"
          bg="#C4C4C421"
          mt="6"
          borderColor="red"
        >
          <Center>
            <Box
                          border="2px "
              fontSize="35"
              opacity="20%"
              fontWeight={700}
              marginTop={50}
              as={BsCloudUpload}
            ></Box>

          </Center>

          <Center>
            <Text
              color="#5957578F"
              marginTop={5}
              fontSize="18px"
              fontWeight="bold"
              fontStyle="normal"
            >
              Select Video to upload
            </Text>
          </Center>
          <Center>
            <Text
              color="#5957578F"
              size="20"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="bold"
            >
              or drag and drop a file
            </Text>
          </Center>
          <Center>
            <UnorderedList
              fontSize={13}
              marginTop={7}
              color="#5957578F"
              fontWeight={700}
            >
              <ListItem className="bullet_list" margin={4}>
                MP4 or WebM
              </ListItem>
              <ListItem className="bullet_list" margin={4}>
                720X1280 resolution or higher
              </ListItem>
              <ListItem className="bullet_list" margin={4}>
                Up to 60 seconds
              </ListItem>
            </UnorderedList>
          </Center>
        </Box>
      </Box>

      <Box
        w={["90%", "90%", "90%", "65%"]}
        marginLeft="6"
        paddingTop="90px"
      >
        <div>
          <Text
            className="caption_lable"
            fontWeight="600"
            fontSize="20"
            lineHeight="35.88px"
            mt={2}
          >
            Caption
            <Text
              className="caption_span"
              fontWeight="light"
              fontStyle="normal"
              fontSize="12"
              mb={-1.9}
              mt={4}
              mr={2}
            >
              0/150
            </Text>
          </Text>

          <Input
          
          maxLength="150"
         border="2px"
         borderColor="orange"
            className="caption"
            mt={-3}
            type="text"
            placeholder="@  #"
            borderRadius="none"
          />
        </div>

        <div>
          <FormControl>
            <FormLabel
              fontWeight="600"
              fontSize="20"
              lineHeight="35.88px"
              mb={1}
              mt={6}
            >
              Cover
            </FormLabel>
            <Box borderWidth={1} >
              <Img
              
                backgroundColor="#C4C4C421"
                border="1px"
                borderColor="blue"
                width="100px"
                height="130px"
                m={2}
                box="red"
              />
            </Box>
          </FormControl>
        </div>

        <Flex  justifyContent="space-between">
          <div >
            <Text
              mt="15px"
              mb="8px"
              fontStyle="Roboto"
              fontWeight="600"
              fontSize="20"
              lineHeight="35.88px"
            >
              Who can view this video
            </Text>
            <RadioGroup value={1}>
              <Stack
                direction="row"
                fontStyle="Roboto"
                fontWeight="400"
                fontSize="24"
              >
                <Radio value="1">Public</Radio>
                <Radio value="2">Freind</Radio>
                <Radio value="3">Private</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <div>
            <Text
              mt="15px"
              mb="8px"
              fontStyle="Roboto"
              fontWeight="600"
              fontSize="20"
              lineHeight="35.88px"
            >
              Allows users to:
            </Text>
            <HStack
              direction="row"
              fontStyle="Roboto"
              fontWeight="400"
              fontSize="24"
              mr={3.5}
            >
              <Checkbox>Comment</Checkbox>
              <Checkbox>Duet/React</Checkbox>
              <Checkbox>Stitch</Checkbox>
            </HStack>
          </div>
        </Flex>

        <Flex justifyContent="flex-end" p={5}>
          <ButtonGroup variant="outline" spacing="7">
            <Button
              border="1px solid  "
              fontFamily="heading"
              fontStyle="normal"
              fontWeight="799"
              width="110px"
              height="35px"
              borderRadius="none"
              color="rgba(89, 87, 87, 0.82)"
              bg="#FFFFFF"
              boxSizing="border-box"
            >
              Discard
            </Button>
            <Button
              color="rgba(89, 87, 87, 0.82)"
              fontStyle="normal"
              fontWeight="799"
              boxSizing="border-box"
              border="1px solid #C4C4C4"
              borderColor="gray"
              borderRadius="none"
              width="110px"
              height="35px"
              background="rgba(196, 196, 196, 0.33)"
            >
              Post
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Upload_Video;