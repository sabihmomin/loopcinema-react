import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {
  deleteReviewLocalStorage,
  getLoggedInUserLocalStorage,
  getMoviesFromLocalStorage,
  getReviewsLocalStorage,
} from "../Commons";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import DeleteModal from "./DeleteModal";
import EditReviewModal from "./EditReviewModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteReviewById, getUserReviews } from "../Repository/reviewsData";

const MyReviews = () => {
  const [userReviews, setUserReviews] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState();
  const [modalType, setModalType] = useState("");

  //modal open and close functions
  const onOpenModal = (obj, type) => {
    setOpen(true);
    setSelectedReview(obj);
    setModalType(type);
  };
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    //getting all the reviews done by the loggedin user
    const fetchUserReviews=async(e)=>{
      const reviews=await getUserReviews(getLoggedInUserLocalStorage()?.userId)
      setUserReviews(reviews)
    }
    fetchUserReviews();
    // const loggedinUser = getLoggedInUserLocalStorage();
    // const reviews = getReviewsLocalStorage();
    // const reviewsArray = [];
    // setMovieList(getMoviesFromLocalStorage());
    // reviews.map((obj) => {
    //   if (obj?.user === loggedinUser?.email) {
    //     reviewsArray.push(obj);
    //   }
    // });
    // setUserReviews(reviewsArray);
  }, [open]);

  //getting moviename to map in the list
  const getMovieName = (id) => {
    const movie = movieList.find((obj) => obj.id === id);
    return movie ? movie.name : "";
  };

  //delete review functionality
  const deleteReview = async() => {
    // deleteReviewLocalStorage(selectedReview);
    const message=await deleteReviewById(selectedReview?.reviewId);
    if(message?.status == 200){
      toast.success(message?.message, {
        position: toast.POSITION.TOP_CENTER,
  
        hideProgressBar: true,
  
        style: {
          marginTop: "60px",
        },
      });
    }else{
      toast.error(message?.message, {
        position: toast.POSITION.TOP_CENTER,

        hideProgressBar: true,

        style: {
          marginTop: "60px",
        },
      });
    }
    
    setOpen(false);
  };
  return (
    <>
      <div className="flex justify-center  text-white w-[100%] ">
        <div className="w-[100%] bg-[#272121] rounded-2xl h-[100%] overflow-y-auto p-8 ">
          <div className="text-3xl text-[#ff2e38] font-extrabold">
            My Reviews
          </div>
          {userReviews.length === 0 ? (
            <p>You havent posted any reviews yet.</p>
          ) : (
            <ul className="space-y-4">
              {userReviews.map((review, index) => (
                review.lastUpdatedBy === "user" &&
                <li key={index} className="border-t border-[#ff2e38] pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        {review?.movie?.name}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Rating
                          value={review?.rating}
                          readonly
                          style={{ maxWidth: 100 }}
                        />
                      </div>
                      <p className="mt-2" dangerouslySetInnerHTML={{ __html: review.comment }}></p>
                    </div>
                    <div>
                      <button
                        className="m-2"
                        onClick={() => {
                          onOpenModal(review, "edit");
                        }}
                      >
                        <img
                          width={"25px"}
                          height={"25px"}
                          src="assets/edit.png"
                        />
                      </button>
                      <button
                        className="m-2"
                        onClick={() => {
                          onOpenModal(review, "delete");
                        }}
                      >
                        <img
                          width={"25px"}
                          height={"25px"}
                          src="assets/bin.png"
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: `${
            modalType === "delete" ? "customDeleteModal" : "customModal"
          }`,
        }}
      >
        {modalType === "delete" ? (
          <DeleteModal
            name="review"
            confirmClick={deleteReview}
            cancelClick={onCloseModal}
          />
        ) : (
          <EditReviewModal
            selectedReview={selectedReview}
            movieName={selectedReview?.movie?.name}
            onCloseModal={onCloseModal}
            // confirmClick={}
            // cancelClick={}
          />
        )}
        {/* <MovieModal selectedMovie={selectedMovie} /> */}
      </Modal>
    </>
  );
};

export default MyReviews;
