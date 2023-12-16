import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMoviesFromLocalStorage } from "../Commons";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MovieModal from "../Components/MovieModal";
import img1 from "../images/buffer.jpeg";

const MoviesHome = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState();
  const [movies, setMovies] = useState();
  const [open, setOpen] = useState(false);
  const arr=[img1]
  useEffect(() => {
    //storing movieslist in state
    setMovies(getMoviesFromLocalStorage());
    console.log(movies)
  }, []);

  //model open and close functions
  const onOpenModal = (obj) => {
    setOpen(true);
    setSelectedMovie(obj);
  };
  const onCloseModal = () => setOpen(false);

  //carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: false,
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
      <div className="text-3xl font-extrabold text-white mt-12 ml-16">
        NOW SHOWING
      </div>
      <div className="flex justify-end mr-16 items-center">
        <img height={"10px"} width={"20px"} src="assets/information.png" />
        <div className="text-xs font-thin text-slate-400">
          Click on the movie poster for more details
        </div>
      </div>
      <hr className="m-16 mt-4 mb-0" style={{ borderColor: "#ff2e38" }} />
      <div className="flex justify-center shadow-lg">
        <div className="w-[90%] mt-10">
          <Slider {...settings}>
            {movies?.map((obj, index) => (
              <a onClick={() => onOpenModal(obj)} className="p-8" key={index}>
                <img
                  style={{ height: "185px", width: "inherit" }}
                  src={obj?.img === "img1" ? img1 : obj?.img}
                  alt=""
                />
              </a>
            ))}
          </Slider>
        </div>
      </div>
      <div className="ml-50">
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <MovieModal selectedMovieModal={selectedMovie}/>
        </Modal>
      </div>
    </>
  );
};

export default MoviesHome;
