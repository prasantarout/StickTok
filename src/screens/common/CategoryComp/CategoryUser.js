import React from 'react'
import "./categoryuser.scss";
import image1 from "../../../assets/img/image1.png";
import image2 from "../../../assets/img/image2.png";
import image36 from "../../../assets/img/image36.png";
import CarosuelCat from "../CategoryComp/CarosuelCat";
import {BiHash} from "react-icons/bi";
export default function CategoryUser() {
    return (
        <div className="category">
            <div className="category_img">
                <img src={image1} alt=""/>
            </div>
            <div className="container">
                <div className="Category_Heading">
                <h1>Trending</h1>
                <div className="category_icon1">
                    <img src={image2} alt=""/>
                </div>
                </div>
                 <div className="Category_icon2">
                     <div className="hash_tag">
                     <BiHash />
                     </div>
                    
                   </div>
                  <div className="category_heading_tag"><h2>hairhack</h2></div>
                 
                  <div className="Category_icon3">
                     <div className="hash_tag">
                     <BiHash/>
                     </div>
                </div>
                  <div className="category_heading_tag"><h2>slayathome</h2></div>
                  <div className="Category_icon4">
                     <div className="hash_tag">
                     <BiHash/>
                     </div>
                </div>
                   <div className="category_heading_tag"><h2>brighterinsides</h2>
                   </div>
                   <div className="Heading_tab">
                       <div className="Heading_tab_info">
                       <h3 className="view_more_tab">View more</h3>
                       </div>
                       
                   </div>
                   <div className="Topic_info">
                           <h6>Topics</h6>
                           <div className="Topic_caro">
                           <CarosuelCat/>
                           </div>
                       </div>
                       
                       </div>
                       <div className="Image_tag">
                           <img src={image36}/>
                       </div>
                       
                 </div>
     
    )
}
