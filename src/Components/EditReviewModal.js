import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getReviewsLocalStorage } from "../Commons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { editReview } from "../Repository/reviewsData";

const EditReviewModal = (props) => {
  const { selectedReview, movieName, onCloseModal } = props;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    //setting state of rating and comment based on props
    setRating(selectedReview?.rating);
    setComment(selectedReview?.comment);
  }, []);

  //input handlechange
  const handleCommentChange = (newComment) => {
    if (newComment.length <= 600) {
      setComment(newComment);
      setCharCount(newComment.length);
    } else {
      // If the character limit is exceeded, truncate the input to 600 characters
      const truncatedComment = newComment.slice(0, 600);
      setComment(truncatedComment);
      setCharCount(600);
    }
  };

  //update review
  const updateClick = async() => {
    //find the review of the specific movie by the user
    //check rating and comment empty or 0
    if (rating <= 0) {
      toast.error("Rating cannot be empty", {
        position: toast.POSITION.TOP_CENTER,

        hideProgressBar: true,

        style: {
          marginTop: "60px",
        },
      });
    } else if (comment.length == 0) {
      toast.error("Comment cannot be empty", {
        position: toast.POSITION.TOP_CENTER,

        hideProgressBar: true,

        style: {
          marginTop: "60px",
        },
      });
    } else{
      const editObj={
        reviewId:selectedReview?.reviewId,
        rating:rating,
        comment:comment
      }
      const message=await editReview(editObj)
      if(message?.status == 200){
        toast.success(message?.message, {
          position: toast.POSITION.TOP_CENTER,
  
          hideProgressBar: true,
  
          style: {
            marginTop: "60px",
          },
        });
        onCloseModal();
      }else{
        toast.error(message?.message, {
          position: toast.POSITION.TOP_CENTER,
  
          hideProgressBar: true,
  
          style: {
            marginTop: "60px",
          },
        });
        onCloseModal();
      }
      
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="font-extrabold text-4xl text-white mb-4">
          {movieName}
        </div>
        <div className="rating mt-4">
          <Rating
            style={{ maxWidth: 150 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <div className="w-[50%] mt-4">
        <ReactQuill theme="snow" value={comment} onChange={handleCommentChange} readOnly={comment.length >= 600} className="textcolor"/>
        </div>
        {charCount >= 600 ? (
            <div className="text-xs text-red-400">
              Word Limit Reached!
             </div>
        ) : (
          <div className="text-xs text-gray-400">
            Maximum characters allowed: 600 | Characters remaining: {600 - charCount}
          </div>
        )}
        <button
          className="bg-[#ff2e38] m-4 p-1 rounded-lg text-xs w-28 text-center font-bold text-white"
          onClick={() => {
            updateClick();
          }}
        >
          UPDATE
        </button>
      </div>
    </>
  );
};

export default EditReviewModal;
