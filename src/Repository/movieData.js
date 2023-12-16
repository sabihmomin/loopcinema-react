import axios from "axios";

const API_HOST = "http://localhost:4000/api/movies";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export async function getMovies() {
    const response = await axios.get(
      API_HOST + "/getMovies"
    );
    const movies = response.data;
  
    return movies;
  }
  
export async function updateCount(movieId){
  const data = {
    id: movieId,
  };
  const response = await axios.post(
    API_HOST + "/updateCount",
    data,
    config
  );
  const count = response.data;

  return count;
}