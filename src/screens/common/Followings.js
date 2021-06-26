import React, { useEffect, useState } from "react";

import {Box, Avatar} from "@chakra-ui/react";

import DownloadBanner from "../../components/DownloadBanner";
import PostCard from "../../components/PostCard/";
import CommonUser from "./components/CommonUser";

import "./Common.scss";

import DemoVideo from "../../assets/img/demo-video.mp4";
import axios from "axios";

const Followings = () => {

  const[result,setResult]=useState([])

  useEffect(()=>{
    axios.get("http://13.232.183.235:3333/api/video/getAll")
    .then((res)=>{
      setResult(res.data.data)
    })
  },[])

  return (
    <>
      <Box className="videos__wrapper">
        {
        result.map((data)=>{
          return(
            <PostCard
          name={data.title}
          thumbnail={data.thumbnail}
          videoSource={data.videoURL}
          hashtags={data.hashtags}
          isVerified={true}
          data={data}
          
        />
          )
        })
      }
      </Box>
      <Box className="download__wrapper">
        <DownloadBanner/>
        </Box> 
        
      <div className="common_user_app">
         <div className="common_user_body">
             <CommonUser/> 
             <CommonUser/>   
             <CommonUser /> 
             <CommonUser /> 
             <CommonUser/> 
             <CommonUser /> 
             <CommonUser /> 
             <CommonUser/> 
             <CommonUser/> 
            </div>
        </div>
   

    </>
  );
};

export default Followings;
