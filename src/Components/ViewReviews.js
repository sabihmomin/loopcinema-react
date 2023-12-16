import React, { useEffect, useState } from "react";
import { getReviewsLocalStorage } from "../Commons";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { getReviewsById } from "../Repository/reviewsData";

const ViewReviews = (props) => {
  const { displaychange, selectedMovie } = props;
  const [reviews, setReviews] = useState([]);
  // const reviews = getReviewsLocalStorage();

  // const filteredReviews = reviews.filter(
  //   (review) => review.movie === selectedMovie.id
  // );
  useEffect(() => {
    const fetchReviews = async () => {
      const review = await getReviewsById(selectedMovie?.id);
      setReviews(review);
    };
    fetchReviews();
  }, []);
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
      <div className="bg-transparent p-4 rounded-lg m-4 text-white">
        <h2 className="text-2xl font-bold mb-2 text-[#ff2e38]">Reviews</h2>
        {reviews?.length === 0 ? (
          <p>No reviews available for this movie.</p>
        ) : (
          <ul className="space-y-4">
            {reviews?.map((review, index) => (
              <li key={index} className="border-t border-[#ff2e38] pt-4">
                <div className="flex items-center">
                  <div className="rounded-full w-10 h-10 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-lg mr-3">
                    {review.name.charAt(0).toUpperCase()}
                    {review.name.charAt(1).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex items-center space-x-2">
                      <Rating
                        value={review.rating}
                        readOnly
                        style={{ maxWidth: 100 }}
                      />
                    </div>
                    { review?.lastUpdatedBy == "admin" ?
                      <p className="font-extralight italic text-gray-500 justify-end">This review was deleted by admin</p>
                      :
                      <p
                        className="mt-2"
                        dangerouslySetInnerHTML={{ __html: review.comment }}
                      ></p>
                    }
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ViewReviews;
