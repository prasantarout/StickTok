import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Avatar,
  Button,
  Center,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Container,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bgImg from "../../assets/img/course1.png";
// import polygon from "../../assets/img/Polygon.png";
import bgImg1 from "../../assets/img/course2.png";
import bgImg2 from "../../assets/img/course3.png";
import bgImg3 from "../../assets/img/Rectangle 49.png";
import girl3 from "../../assets/img/girl3.png";


import "./Course1.scss";
import { GoTriangleRight } from "react-icons/go";

const Course1 = (props) => {
  const cards = [
    {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg", 
    "title":"Burgundy Flemming", 
    "subtitle":"Advertising"},
   {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", 
    "title":"Nigel Nigel", 
    "subtitle":"Sound & Vision"},
   {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", 
    "title":"Caspian Bellevedere", 
    "subtitle":"Accounting"},
 ];
 const Article = ({
  function() {
     const image = props.data.image,
         title = props.data.title,
         subtitle = props.data.subtitle;
 
  }})

  return (
    <Flex
    width="100%"
    height="100%"
    display
    direction={["column", "column","column", "column"]}
    >
            <Box width={["39em", "39em", "45em", "100%"]}
            display="grid" h="70%">
            <Box className="image2" >
            <img src={bgImg1} className="image_3"  />
            </Box>
      </Box>
  <Box  h="auto" width={["39em", "39em", "45em", "100%"]}>
  <Box m="35px" mt="5px">
  <Heading color="red" fontSize="30px" fontStyle="normal" lineHeight="40px">Choose from 155,000 + online video courses</Heading>
   <Text color="grey" fontSize="18px">with new additions published every month</Text>
   <Box mt="30px" justifyContent="flex-start">
   <Flex>
   <Tabs variant="unstyled">
  <TabList >
    <Tab fontWeight="semibold">Python</Tab>
    <Tab fontWeight="semibold" ml="22px">Excel</Tab>
    <Tab fontWeight="semibold" ml="22px">Web Development</Tab>
    <Tab fontWeight="semibold" ml="22px">Javescript</Tab>
    <Spacer/>
    <Menu>
   {({ isOpen }) => (
     <>
       <MenuButton
         background="none"
         isActive={isOpen}
         as={Button}
         rightIcon={<ChevronDownIcon />}
         justifyContent="flex-end"
       >
         {isOpen ? "Close" : "View more"}
       </MenuButton>
       <MenuList>
         <MenuItem>Download</MenuItem>
         <MenuItem onClick={() => alert("Kagebunshin")}>
           Create a Copy
         </MenuItem>
       </MenuList>
     </>
   )}
 </Menu>  
  </TabList>
  
  <TabPanels background="#F7F7F757" >
    <TabPanel>
    <Box justifyItems="center" d="grid" textAlign="center" 
    >
     <Avatar bg="orange" size="xl" src={bgImg2} />
     <Heading mt="15px" fontSize="25px" >Expand your career opportunities with Python</Heading>
     <Center mt="15px" letterSpacing="2px">
     Whether you work in machine learning or finance, or are pursuing a career in web
     Whether you work in machine learning or finance, or are pursuing a career in web
     Whether you work in machine learning or finance, or are pursuing a career in web
     </Center>
     <Button justifySelf="start" mt="25px" color="#C40A2C" variant="ghost" ml="30px" border="2px solid #C40A2C" borderRadius="none">
    Button
  </Button>
  <div className="new-producetes"> 
  
  <div className="col-md-12">
        <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
            <div className="controls-top">
                <a className="btn-floating prev" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                <a className="btn-floating next" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
            </div>

            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button1</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button1</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button1</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="carousel-item">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="carousel-item">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-2">
                                <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Cards Personalization</h5>
                                    <div className="hr-line-curser"></div>
                                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <a className="btn btn-primary">Button1</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
</div> 
   
    

  </Box>
    </TabPanel>
    <TabPanel>
    <Box justifyItems="center" d="grid" textAlign="center" 
    >
     <Avatar bg="orange" size="xl" src={bgImg2} />
     <Heading>Expand your career opportunities with Python</Heading>
     <Box>
     Whether you work in machine learning or finance, or are pursuing a career in web
     Whether you work in machine learning or finance, or are pursuing a career in web
     Whether you work in machine learning or finance, or are pursuing a career in web
     </Box>
         </Box>
    </TabPanel>
    <TabPanel>
    <Box justifyItems="center" d="grid" textAlign="center" background="#F7F7F757d"
    >
     <Avatar bg="orange" size="xl" src={bgImg2} />
     <Heading>Expand your career opportunities with Python</Heading>
     <Box>
     Whether you work in machine learning or finance, or are pursuing a career in web
     Whether you work in machine learning or finance, or are pursuing a career in web
     Whether you work in machine learning or finance, or are pursuing a career in web
     </Box>
         </Box>
    </TabPanel>
    <TabPanel>
    <Box justifyItems="center" d="grid" textAlign="center" background="#F7F7F757d"
    >
     <Avatar bg="orange" size="xl" src={bgImg2} />
     <Heading>Expand your career opportunities with Python</Heading>
     <Box>
     Whether you work in machine learning or finance, or are pursuing a career in web
     Whether you work in machine learning or finance, or are pursuing a career in web
     Whether you work in machine learning or finance, or are pursuing a career in web
     </Box>
         </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
   </Flex>
   </Box>
  </Box>
  </Box>    
      <Box width={["39em", "39em", "45em", "100%"]} height="20%" mt="-70px">
      <hr/>
      <Flex justifyContent="space-around" m="23px" >
      <Box display="flex">
      <Avatar  icon={<GoTriangleRight size="40px"  color="white"  /> }
         bg="#C40A2C"
         />
         <Center ml="5px">Over 155,000 video courses <br/>
         on career and personal skills</Center>
      </Box>
      <Box display="flex">
      <Avatar  icon={<GoTriangleRight size="40px"  color="white"  /> }
         bg="#C40A2C"
         />
         <Center ml="5px">Over 155,000 video courses <br/>
         on career and personal skills</Center>
      </Box>
      <Box display="flex">
      <Avatar  icon={<GoTriangleRight size="40px"  color="white"  /> }
         bg="#C40A2C"
         />
         <Center ml="5px">Over 155,000 video courses <br/>
         on career and personal skills</Center>
      </Box>
      
      </Flex>
      <hr/>
      </Box>
      <Box width={["39em", "39em", "45em", "100%"]} >
      <Tabs variant="unstyled" >
  <TabList m="20px" >
    <Tab fontWeight="bold" fontSize="18px">Top Catagories </Tab>
      <Spacer/>
      <Tab fontWeight="semibold" fontSize="18px">View more</Tab>   
  </TabList>
  
  <TabPanels >
    <TabPanel >
    <Box justifyItems="center" d="grid" mt="-35px"
    >
          
          <div className="col-md-12">
              <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                  
                      <div className="carousel-item active">

                          <div className="row">
                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button1</a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button1</a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button1</a>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>

                      <div className="carousel-item">

                          <div className="row">
                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button</a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button</a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button</a>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>

                      <div className="carousel-item">

                          <div className="row">
                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button</a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button</a>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="card mb-2">
                                      <img className="card-img-top" src={bgImg3} alt="Card image cap"/>
                                      <div className="card-body">
                                          <h5 className="card-title">Cards Personalization</h5>
                                          <div className="hr-line-curser"></div>
                                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                          <a className="btn btn-primary">Button1</a>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>

                  </div>

                  <ol className="carousel-indicators">
                      <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                      <li data-target="#multi-item-example" data-slide-to="1"></li>
                      <li data-target="#multi-item-example" data-slide-to="2"></li>
                  </ol>

              </div>
  </Box>
</TabPanel>
</TabPanels>
</Tabs>

      </Box>
   <Box display="flex"  h="70%" width={["39em", "39em", "45em", "100%"]}>
   <Grid w="50%">
   <img src={girl3} className="img_girl3"/>
   </Grid>
   <Grid display="grid" justifyItems="center" bg="#C40A2C0F" h="50%" mt="80px"  w="50%">
    <Box justifySelf="center" textAlign="center"  h="30%" display="grid" mt="30px">    
    <Heading>Become an instructor</Heading>
    <Text mt="5px">Top instructors from around the world teach 
    millions of students on Udemy. We provide 
    the tools and skills to teach what you love.</Text>
    
    </Box>
   </Grid>
   </Box>
      </Flex>
  );
};

export default Course1;

