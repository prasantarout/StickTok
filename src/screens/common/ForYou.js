import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";

import DownloadBanner from "../../components/DownloadBanner";
import PostCard from "../../components/PostCard/";

import "./Common.scss";

import DemoVideo from "../../assets/img/demo-video.mp4";
import axios from "axios";

const ForYou = () => {
  const[result,setResult]=useState([])

  useEffect(()=>{
    axios.get("http://13.232.183.235:3333/api/video/getAll")
    .then((res)=>{
      // console.log(res.data.data);
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
          description={data.description}
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
        <DownloadBanner />
      </Box>
    </>
  );
};

export default ForYou;