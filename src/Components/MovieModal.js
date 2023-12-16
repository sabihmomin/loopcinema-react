import React, { useEffect, useState } from "react";
import {
  calculateAvgRating,
  checkReviewBlocked,
  getLoggedInUserLocalStorage,
  getLoginFlag,
  getMoviesFromLocalStorage,
  getReviewsLocalStorage,
} from "../Commons";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import WriteReview from "./WriteReview";
import ViewReviews from "./ViewReviews";
import { click } from "@testing-library/user-event/dist/click";
import { isReviewAllowed } from "../Repository/reviewsData";
import img1 from "../images/buffer.jpeg";
import { updateCount } from "../Repository/movieData";

const MovieModal = (props) => {
  const { selectedMovieModal } = props;
  // 1-movie details | 2-write review | 3- view reviews
  const [display, setDisplay] = useState(1);
  //if user has more negative reviews blocked from reviewing
  const [blocked, setBlocked] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();
  const [alreadyReviewed, setAlreadyReviewed] = useState(false);

  useEffect(() => {
    if (display == 1) {
      const movies = getMoviesFromLocalStorage();
      const clickedMovie = movies?.find(
        (movie) => movie?.id === selectedMovieModal?.id
      );
      setSelectedMovie(clickedMovie);
      const count=async()=>{
        await updateCount(clickedMovie?.id)
      }
      count();
      const fetchData = async () => {
        if (getLoginFlag()) {
          const reviewObj = {
            userId: getLoggedInUserLocalStorage()?.userId,
            movie: clickedMovie?.id,
          };
          const res = await isReviewAllowed(reviewObj);
          console.log(res)
          setAlreadyReviewed(res);
        }
        
        checkReviewBlocked();
        if (checkReviewBlocked()) {
          setBlocked(true);
        }
      };
      fetchData();
    }
  }, [selectedMovieModal, display]);
  const displaychange = (val) => {
    setDisplay(val);
  };


  return (
    <>
      {display == 1 ? (
        <>
          <div className="bg-[#f5cc50] m-4 p-1 rounded-lg text-xs w-28 text-center font-bold">
            NOW SHOWING
          </div>
          <div className="flex justify-between h-[65%]">
            <div className="m-4 w-[50%] h-[50%]">
              <div className="font-extrabold text-2xl text-white">
                {selectedMovie?.name}
              </div>
              <div className="mt-3 font-semibold text-xl text-white">
                {selectedMovie?.release}
              </div>
              <div className="mt-3 font-light text-sm text-white">
                {selectedMovie?.desc}
              </div>
              <div className="flex text-white mt-4">
                <div className="font-medium text-base">Language : </div>
                <div className="font-normal text-base">&nbsp; English</div>
              </div>
              <div className="flex text-white mt-4">
                <div className="font-medium text-base">Director : </div>
                <div className="font-normal text-base">
                  &nbsp; {selectedMovie?.director}
                </div>
              </div>
              <div className="flex text-white mt-4">
                <div className="font-medium text-base">Rating : </div>
                <div className="font-normal text-base p-1">
                  <Rating
                    value={selectedMovie?.avgRating}
                    readOnly
                    halfFillMode="svg"
                    style={{ maxWidth: 100 }}
                  />
                </div>
              </div>
            </div>
            <div className="m-4 w-[40%] h-[100%] rounded-lg overflow-hidden">
              <img className="aspect-[1]" src={selectedMovie?.img === "img1" ? img1 : selectedMovie?.img} alt="" />
            </div>
          </div>
          {getLoginFlag() ? (
            <>
              <div className="m-4 flex">
                {!alreadyReviewed?.isReviewed ? (
                  <button
                    className="text-white hover:text-red-500"
                    onClick={() => {
                      displaychange(2);
                    }}
                  >
                    <div className="flex p-2 justify-between ">
                      <img
                        height={"30px"}
                        width={"30px"}
                        src="assets/rating.png"
                        alt="Write a review"
                        className=""
                      />
                      <div className="mt-2 ml-2">Write a Review</div>
                    </div>
                  </button>
                ) : (
                  <></>
                )}
                <button
                  className={`text-white hover:text-red-500 ${
                    alreadyReviewed?.isReviewed ? "ml-0" : "ml-4"
                  }`}
                  onClick={() => {
                    displaychange(3);
                  }}
                >
                  <div className="flex p-2 justify-between">
                    <img
                      height={"30px"}
                      width={"30px"}
                      src="assets/review.png"
                      className=""
                    />
                    <div className="mt-2 ml-2">View all reviews</div>
                  </div>
                </button>
              </div>
              <div
                className={`text-white flex text-md font-light ml-6 ${
                  !alreadyReviewed?.isReviewed ? "hidden" : ""
                }`}
              >
                <img
                  height={"15px"}
                  width={"25px"}
                  src="assets/information.png"
                  alt="Info Icon"
                  className=""
                />
                {alreadyReviewed?.message}
              </div>
            </>
          ) : (
            <div className="m-4">
              <button
                className="text-white hover:text-red-500"
                onClick={() => {
                  displaychange(3);
                }}
              >
                <div className="flex p-2 justify-between">
                  <img
                    height={"30px"}
                    width={"30px"}
                    src="assets/review.png"
                    className=""
                  />
                  <div className="mt-2 ml-2">View all reviews</div>
                </div>
              </button>
              <div className="flex p-2">
                <img
                  height={"15px"}
                  width={"30px"}
                  src="assets/information.png"
                  className=""
                />
                <div className="text-white font-thin text-xs p-2">
                  Login to write a review
                </div>
              </div>
            </div>
          )}
        </>
      ) : display == 2 ? (
        <>
          <WriteReview
            selectedMovie={selectedMovie}
            displaychange={displaychange}
          />
        </>
      ) : display == 3 ? (
        <>
          <ViewReviews
            displaychange={displaychange}
            selectedMovie={selectedMovie}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieModal;
