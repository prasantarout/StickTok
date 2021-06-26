import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Ellipse11 from "../../../assets/img/Ellipse11.png";
import Ellipse12 from "../../../assets/img/Ellipse12.png";
import Ellipse13 from "../../../assets/img/Ellipse13.png";
import Ellipse14 from "../../../assets/img/Ellipse14.png";
import Ellipse15 from "../../../assets/img/Ellipse15.png";
// import "./categoryuser.scss";

const CarosuelCat=()=>{
  const settings = {
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider" style={{margin:"40px"}} >
      
      <Slider {...settings} >
        <div className="slider_map">
          <img src={Ellipse11} style={{width:"100px" ,height:"100px"}}/>
          <p style={{fontSize:"20px"}}>Comedy</p>
        </div>
        <div className="slider_map">
        <img src={Ellipse12}  style={{width:"100px" ,height:"100px"}}/>
         <p  style={{fontSize:"20px"}}>Dance</p>
        </div>
        <div className="slider_map">
        <img src={Ellipse13}  style={{width:"100px" ,height:"100px"}}/>
        <p  style={{fontSize:"20px"}}>Animals</p>
        </div>
        <div className="slider_map">
        <img src={Ellipse14}  style={{width:"100px" ,height:"100px"}}/>

        <p  style={{ fontSize:"20px"}}>Beauty</p>
        </div>
        <div className="slider_map">
        <img src={Ellipse15} style={{width:"100px" ,height:"100px"}}/>
        <p  style={{fontSize:"20px"}}>Gaming</p>
        </div>
        
      </Slider>
    </div>
  );
}




  
 
export default CarosuelCat;