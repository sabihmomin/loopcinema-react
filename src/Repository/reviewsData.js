import axios from "axios";
import { setMoviesInLocalStorage } from "../Commons";

const API_HOST = "http://localhost:4000/api/posts";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export async function writeReview(reviewObj) {
  const data = {
    comment: reviewObj?.comment,
    name: reviewObj?.name,
    userId: reviewObj?.userId,
    rating: reviewObj?.rating,
    movie: reviewObj?.movie,
    lastUpdatedBy:'user'
  };
  const response = await axios.post(
    API_HOST + "/createReview",
    data,
    config
  )
  await setMoviesInLocalStorage();
  const review = response?.data;

  return review;
}

export async function getReviewsById(movieId) {
  const data = {
    movie:movieId
  };
  const response = await axios.post(
    API_HOST + "/getReview",
    data,
    config
  );
  const review = response.data;

  return review;
}

export async function getUserReviews(userId) {
  const data = {
    userId:userId
  };
  const response = await axios.post(
    API_HOST + "/getUserReviews",
    data,
    config
  );
  const review = response.data;

  return review;
}

export async function deleteReviewById(reviewId){
  const data = {
    reviewId:reviewId
  };
  const response = await axios.post(
    API_HOST + "/deleteReview",
    data,
    config
  )
  await setMoviesInLocalStorage();
  const message = response.data;

  return message;
}

export async function editReview(editObj){
  const data={
    reviewId:editObj?.reviewId,
    rating:editObj?.rating,
    comment:editObj?.comment
  }
  const response = await axios.post(
    API_HOST + "/editReview",
    data,
    config
  )
  await setMoviesInLocalStorage();
  const message = response.data;

  return message;
}

export async function isReviewAllowed(reviewObj){
  const data={
    userId:reviewObj?.userId,
    movie:reviewObj?.movie
  }
  const response = await axios.post(
    API_HOST + "/isReviewAllowed",
    data,
    config
  );
  const message = response.data;

  return message;
}