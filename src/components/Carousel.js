import React from "react";
import { Carousel } from "antd";
import image from "../assets/Rectangle3.png";
function Slider() {
  return (
    <div>
      <Carousel effect="fade" autoplay>
        <div className="carouseldiv">
          <h3 style={contentStyle}>
            <h2 className="caruselp ">
              Sustainable & Smart Agriculture
              <br />
              Trading Platform
            </h2>
            <p className="carouselptag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
              <br /> tempus libero ornare nulla aenean vulputate malesuada.
            </p>
          </h3>
        </div>
        <div className="carouseldiv1">
          <h3 style={contentStyle}>
            <h2 style={{color:"#256834"}} className="caruselp ">
              Empowering Farmers <br />
              with Technology
            </h2>
            <p className="carouselptag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
              <br /> tempus libero ornare nulla aenean vulputate malesuada.
            </p>
          </h3>
        </div>

        <div className="carouseldiv">
          <h3 style={contentStyle}>
            <h2 className="caruselp ">
              Making Farm to Fork a <br />
              Reality
            </h2>
            <p className="carouselptag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
              <br /> tempus libero ornare nulla aenean vulputate malesuada.
            </p>
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
const contentStyle = {
  height: "700px",
  Width: "1920px",
  color: "#fff",
  lineHeight: "160px",
  // textAlign: 'center',
  // background: "url(https://image.shutterstock.com/image-photo/nature-background-table-wood-product-260nw-285662423.jpg)",
  // marginTop:"320px",

  backgroundSize: "cover",
};
