import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../images/banner1.png";
import img2 from "../images/banner2.png";
import img3 from "../images/Opp.jpeg";
import img4 from "../images/TTM.jpeg";
import img5 from "../images/banner3.png";
import img6 from "../images/banner4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviesHome from "./moviesHome";
import Locations from "../Components/Locations";
import Showtimes from "../Components/Showtimes";

const Home = () => {
  //banner images array 
  const images = [img1, img2, img3, img4, img5, img6];
  //carousel state and settins
  const [slideIndex, setSlideIndex] = useState(0);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: false,
    fade: true,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex justify-center shadow-lg mt-[2%]">
        <div className="w-[95%] mt-[2%] ">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div
                className={`
                  ${index === slideIndex ? "slide slide-active" : "slide"}
                `}
                key={index}
              >
                <img
                  className="rounded-lg object-cover "
                  style={{ height: "inherit", width: "inherit" }}
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <>
        <Locations />
      </>
      <>
        <div className="flex justify-center m-[2%]">
          <div className="w-[90%] h-[250px] m-[2%] ml-[10%] ">
            <img
              className="rounded-lg object-cover "
              style={{ height: "inherit", width: "inherit" }}
              src="assets/memberbanner.png"
              alt=""
            />
          </div>
        </div>
      </>
      <>
        <MoviesHome />
      </>
      <Showtimes />
    </>
  );
};

export default Home;
