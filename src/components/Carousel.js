import React from "react";
import { Carousel } from "antd";
import image from "../assets/Rectangle3.png";
import image1 from "../assets/Rectangle2.png";
import image2 from "../assets/Rectangle4.png";

function Slider() {
  return (
    <div className="antCarousel" >
      <Carousel effect="fade" autoplay >
        <div className="carouseldiv  ">
          <div className="p-3 p-md-4 p-lg-5  contentstye " style={contentStyle}>
            <div>
              <img className="bgimage1" src="https://eagri-images.s3.ap-southeast-1.amazonaws.com/Group%2018398.png" />
              <h2 className="caruselp mb-3 ">
                Sustainable & Smart Agriculture
                <br />
                Trading Platform
              </h2>
              {/* <p className="carouselptag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
                <br /> tempus libero ornare nulla aenean vulputate malesuada.
              </p> */}
            </div>
          </div>
        </div>
        <div className="carouseldiv ">
          <div className="p-3 p-md-4 p-lg-5 contentstye" style={contentStyle}>
            <div>
            <img className="bgimage1" src="https://eagri-images.s3.ap-southeast-1.amazonaws.com/Group%2018397.png" />

              <h2 style={{ color: "#256834" }} className="caruselp mb-3 ">
                Empowering Farmers <br />
                with Technology
              </h2>
              {/* <p className="carouselptag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
                <br /> tempus libero ornare nulla aenean vulputate malesuada.
              </p> */}
            </div>
          </div>
        </div>

        <div className="carouseldiv ">
          <div  className="p-3 p-md-5 p-lg-5 contentstye" style={contentStyle}>
            <div>
            <img className="bgimage1" src="https://eagri-images.s3.ap-southeast-1.amazonaws.com/Group%2018399.png" />
              
                            <h2 className="caruselp mb-3 ">
                Making Farm to Fork a <br />
                Reality
              </h2>
              {/* <p className="carouselptag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
                <br /> tempus libero ornare nulla aenean vulputate malesuada.
              </p> */}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
const contentStyle = {
  Height: "auto",
  color: "#fff",
  lineHeight: "160px",
  // textAlign: 'center',
  // background: "url(https://image.shutterstock.com/image-photo/nature-background-table-wood-product-260nw-285662423.jpg)",
  // marginTop:"320px",

  backgroundSize: "cover",
  margin: '0 auto',
  alignItems: 'center',
  display: 'flex',
};
