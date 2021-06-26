import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Square,
  Spacer,
  Text,
  Avatar,
  Image,
  Link,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Container,
  Stack,
  AvatarGroup,
} from "@chakra-ui/react";
import "./author.scss";
import React from "react";
import bgImg from "../../assets/img/lea.png";
import bgImg1 from "../../assets/img/learn.png";
import bgImg2 from "../../assets/img/rn.png";
import bgImg3 from "../../assets/img/bulb.png";
import bgImg4 from "../../assets/img/dp.png";
import bgImg5 from "../../assets/img/thumb.png";
import girl1 from "../../assets/img/girl1.png";
import girl2 from "../../assets/img/girl2.png";
import machine from "../../assets/img/machine.png";
import { createBreakpoints } from "@chakra-ui/theme-tools"

// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

// Internally, we transform to this

const Author = () => {
   
  return (
    <Flex 
    w="100%"
    height="full"
    direction={["column", "column", "column", "column","column"]}>
    <Flex background="#C40A2C" width={["65em", "90em", "65em", "90em", "100%", "100%"]}>
    <Grid gridRow="auto" height="300px" w="40%">
    <Box ml="50px" mt="80px"fontSize={{ base: "10px", md: "20px", lg: "20px" }}>
    <Heading
    color="white"
    
      
      fontWeight="700"
      lineHeight="65px"
      letterSpacing="0em"
    >
      Come teach with us
    </Heading>
    <Text

  
    color="white" 
      fontStyle="normal"
      fontWeight="600"
      // lineHeight="91px"
      // letterSpacing="3em"
    >
      Become an instructor and change <br></br>
      lives — including your own
    </Text>
    <Button size="md" height="48px" mt="25px" width="150px" color="#C40A2C">
      GET STARTED
    </Button>
    </Box>
    </Grid>    
    <Grid  display="flex" h="80" w="50%" >
    <Box  display="flex-end" ml="100px">
    <Image  src={bgImg}  height="140px" ml="75px" marginTop="65px"/>
    <Image src={bgImg2}  width="200px"  height="180px" ml="365px" marginTop="-169px" />
    <Image src={bgImg1} boxSize="270px"  ml="250px"  marginTop="-168px"/>
    </Box>
    </Grid>    
    </Flex>

    <Box  width={["65em", "90em", "65em", "90em", "100%", "100%"]}  h="60%">
            
              <Heading textAlign="center"  mt="20px" fontSize={{base:"24px",sm:"40px",md:"30px"}}>So many reasons to start</Heading>
            
            <Flex  w="100%" textAlign="center ">
              <Center w="35%" h="100%">
                <Grid className="icon_author" mt="40px" ml="30px">
                  <Image
                    className="icon_author"
                    src={bgImg3}
                    bg="gray.100"
                    borderRadius="full"
                    boxSize="50px"
                   ml="180px"
                   
                  
                   
                  />
                  <h1  className="author_heading" ><strong  >Inspire learners</strong></h1>
                  <h5 className="author_para" maxW="container.md">Teach what you know and help learners explore
                  their interests, gain new skills, and advance
                  their careers.</h5>
                </Grid>
              </Center>
              <Center w="35%" >
              <Grid className="icon_author"mt="40px">
              <Image
              ml="180px"
                className="icon_author"
                src={bgImg4}
                bg="gray.100"
                borderRadius="full"
                boxSize="50px"
               
              />
              <h1 size="xl" className="author_heading" ><strong>Inspire learners</strong></h1>
              <h5 className="author_para" maxW="container.md">Teach what you know and help learners explore
              their interests, gain new skills, and advance
              their careers.</h5>
            </Grid>
              </Center>
              <Center w="35%">
              <Grid className="icon_author" mt="40px" >
              <Image
              ml="180px"
                className="icon_author"
                src={bgImg5}
                bg="gray.100"
                borderRadius="full"
                boxSize="50px"
               
              />
              <h1 size="xl" className="author_heading" ><strong>Inspire learners</strong></h1>
              <h5 className="author_para"maxW="container.md">Teach what you know and help learners explore
              their interests, gain new skills, and advance
              their careers.</h5>
            </Grid>
              </Center>
            </Flex>
          </Box>
          <Box h="25%" width={["65em", "90em", "65em", "90em", "100%", "100%"]} mt="80px"bg="black">
          <Flex mt="15px" >
          <Heading ml="104px" mb="40px" textAlign="center" size="md" color="white">10M <br></br>
          Students</Heading>
          <Heading ml="104px" textAlign="center" size="md" color="white">65+
           <br></br>Languages
         </Heading>
         <Heading  ml="104px" textAlign="center" size="md" color="white">180M
         <br></br>Enrollments
       </Heading>
         <Heading  ml="104px" textAlign="center" size="md" color="white">100+
         <br></br>Countries
       </Heading>
         <Heading  ml="104px" textAlign="center" size="md" color="white">7,000+
         <br></br>Enterprise customers
       </Heading>
          </Flex>
          </Box>
          <Box h="80%" width={["65em", "90em", "65em", "90em", "100%", "100%"]}>
          <Flex h="100%">
          <img src={girl1} />
          <Grid  textAlign="center"w="60%" ml="70px">
          <Heading fontSize={{base:"56px",md:"25px",lg:"22px"}} ml="-25px"mt="50px" >You won’t have to do it alone</Heading>
          <Text  fontSize={{base:"25px",md:"25px",lg:"15px"}} w="90%" mt="20px">Our Instructor Support Team is here to answer your questions and
          review your test video, while our Teaching Center gives you plenty of
          resources to help you through the process. Plus, get the support of
          experienced instructors in our online community.</Text>
          <Link color="red" mt="25px"ml="-60px"fontSize={{base:"20px",md:"25px",lg:"22px"}} fontWeight="bold" href="#">
          Need more details before you start? Learn more
      </Link>
          </Grid>
          <img src={girl2}/>
          </Flex>
          </Box>
    
          <Box h="90%" width={["65em", "90em", "65em", "90em", "100%", "100%"]}>
        
          <Heading fontSize="30px" textAlign="center"mb="15px"  mt="-70px" ml="-21px">How to begin ??</Heading>
          <Tabs colorScheme="red" mt="50px">
          <TabList justifyContent="space-around"fontSize={{base:"56px",md:"25px",lg:"24px"}} >
            <Tab>Plan your curriculum</Tab>
            <Tab>Record your video</Tab>
            <Tab>Record your video</Tab>
          </TabList>
        
          <TabPanels >
            <TabPanel >
            <Flex m="40px" mt="-15px">
            <Container className="author_para"mt="30px" ml="29px" fontSize={{base:"24px",md:"20px",lg:"16px"}} >You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a </Container>
           <img src={machine}  width="400px"  />
            </Flex>
            </TabPanel>
            <TabPanel>
            <Flex m="40px" mt="-15px">
            <Container className="author_p"mt="30px" ml="29px">You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a </Container>
           <img src={machine}  width="320px" />
            </Flex>
            </TabPanel>
            <TabPanel>
            <Flex m="40px" mt="-15px">
            <Container mt="30px" ml="29px"><p>
            
            You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a  
            You start with your passion and knowledge Then choose a </p>
            <Heading>How we help you</Heading>
            <p>We offer plenty of resources on how to create your first
            We offer plenty of resources on how to create your first</p>
            </Container>
           <img src={machine}  width="320px" />
            </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
          </Box>
          <Box h="35%" width={["65em", "90em", "65em", "90em", "100%", "100%"]}>
          <Grid justifyContent="center"mt="180px" ml="-300px">
          <Heading>Become an instructor today</Heading>
          <Text textAlign="center" mt="20px" fontSize="20px">Join the largest online learning marketplace.</Text>
          <Button ml="130px" mt="25px" size="md" height="48px" width="200px" color="white" bgColor="red">
              GET STARTED
            </Button>
          </Grid>
          </Box>

      </Flex>
  );
};

export default Author;



      