import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {
  getLoggedInUserLocalStorage,
  pushReviewLocalStorage,
} from "../Commons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { writeReview } from "../Repository/reviewsData";

const WriteReview = (props) => {
  const { selectedMovie, displaychange } = props;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [charCount, setCharCount] = useState(0);

  //input change handle
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

  //submit a review
  const handlePostClick = async () => {
    
    
    //validate rating and comment
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
      } else {
        const reviewObj = {
          comment: comment,
          name: getLoggedInUserLocalStorage()?.name,
          userId: getLoggedInUserLocalStorage()?.userId,
          rating: rating,
          movie: selectedMovie?.id,
        };
        const review = await writeReview(reviewObj);
        if(review){
          toast.success("Review Posted Successfully", {
                position: toast.POSITION.TOP_CENTER,
        
                hideProgressBar: true,
        
                style: {
                  marginTop: "60px",
                },
              });
        
              displaychange(1);
        }else{
          toast.error("Error in posting review", {
            position: toast.POSITION.TOP_CENTER,
    
            hideProgressBar: true,
    
            style: {
              marginTop: "60px",
            },
          });
        }
      }
  };
  return (
    <>
      <button
        className="bg-[#f5cc50] m-4 p-1 rounded-lg text-xs w-28 text-center font-bold"
        onClick={() => {
          displaychange(1);
        }}
      >
        GO BACK
      </button>
      <div className="flex flex-col items-center justify-center">
        <div className="font-extrabold text-4xl text-white mb-4">
          {selectedMovie?.name}
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
            handlePostClick();
          }}
        >
          POST
        </button>
      </div>
    </>
  );
};

export default WriteReview;
