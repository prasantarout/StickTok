import React from "react";
import "./commonuser.scss";
import image55 from "../../../assets/img/image55.png";
import image555 from "../../../assets/img/image555.png";
import image56 from "../../../assets/img/image56.png";
import image36 from "../../../assets/img/image36.png";
import {BiHash} from "react-icons/bi";
import{FaGreaterThan} from "react-icons/fa";
import{BsMusicNoteBeamed} from "react-icons/bs";

import {Carousel} from "react-bootstrap";
export default function TrendingUser() {
    return (
 <div className="carosuel">
    <div className="carosuel_slider_show">
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image55}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={image555}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image55}
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
     </div>
     <div className="covid_heading">
     <h1><strong>COVID-19</strong> : learn some fact about coronavirus</h1>
     </div>
        <div className="circle_icon">
      <div className="Hash_tag">
     <BiHash/>
    </div>
    </div> 
  <div className="Learn_tag_info">
      <h1>LearnWithMe</h1>
      <p>Trending Hashtag</p>
</div>
<div className="greater_wrapper">
<h1 className="timer_wrapper">253.0M</h1>
    <FaGreaterThan className="greater_than"/>
</div> 
<div className="Testmonal_user">
  <img className="Testimonal_image" src={image56}/>
</div>
<div className="circle_icon">
      <div className="music_tag">
     <BsMusicNoteBeamed/>
    </div>
    </div> 
  <div className="Learn_tag_info">
      <h1>Peaches</h1>
      <p>Trending Sound</p>
</div>
<div className="greater_wrapper">
<h1 className="timer_wrapper">243.0M</h1>
    <FaGreaterThan className="greater_than"/>
</div> 
<div className="Testmonal_user">
  <img className="Testimonal_image" src={image56}/>
</div>
<div className="footer_section">
  <img className="d-block w-100 " src={image36}/>
</div>
</div>
 


    );
}
   


    
