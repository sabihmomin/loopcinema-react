import img1 from "../images/elemental.jpg";
import img2 from "../images/MID.jpeg";
import img3 from "../images/Opp.jpeg";
import img4 from "../images/TTM.jpeg";
import img5 from "../images/Barbie.webp";
import img6 from "../images/fastx.jpeg";
import img7 from "../images/indianajones.jpeg";
import img8 from "../images/johnwick.jpg";
import img9 from "../images/meg2.jpg";
import img10 from "../images/saw.webp";
import { getMovies } from "../Repository/movieData";

//setting loginflag
export function setLoginFlag(val) {
  localStorage.setItem("loginFlag", JSON.stringify(val));
}

//return login flag from LS
export function getLoginFlag() {
  return JSON.parse(localStorage.getItem("loginFlag"));
}

//return users from LS
export function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

//add user
export function appendUserInLocalStorage(user) {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    localStorage.setItem("users", JSON.stringify([user]));
  }
}

//update user obj in LS
export function updateUserinLocalStorage(updated) {
  const users = JSON.parse(localStorage.getItem("users"));
  const updatedUsers = users.map((user) => {
    if (user.id === updated.id) {
      return { ...user, ...updated };
    }
    return user;
  });

  localStorage.setItem("users", JSON.stringify(updatedUsers));
}

//add logged in user obj in LS
export function setLoggedInUserLocalStorage(user) {
  localStorage.setItem("loggedinUser", JSON.stringify(user));
}

//return loggedin user obj from LS
export function getLoggedInUserLocalStorage() {
  return JSON.parse(localStorage.getItem("loggedinUser"));
}

//add movies in LS
export async function setMoviesInLocalStorage() {
  const moviesObj = [
    {
      id: "1",
      name: "Oppenheimer",
      img: img3,
      rating: "",
      release: "2023",
      director: "Christopher Nolan",
      desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    },
    {
      id: "2",
      name: "Barbie",
      img: img5,
      rating: "",
      release: "2023",
      director: "Christopher Nolan",
      desc: "Eccentric and individualistic, Barbie is exiled from Barbieland because of her imperfections. When her home world is in peril, Barbie returns...",
    },
    {
      id: "3",
      name: "Elemental",
      img: img1,
      rating: "",
      release: "2023",
      director: "Christopher Nolan",
      desc: "Follows Ember and Wade, in a city where fire-, water-, land- and air-residents live together.",
    },
    {
      id: "4",
      name: "Mission Impossible",
      img: img2,
      rating: "",
      release: "2023",
      director: "Christopher Nolan",
      desc: "Ethan Hunt (Tom Cruise) and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity.",
    },
    {
      id: "5",
      name: "Talk to me",
      img: img4,
      rating: "",
      release: "2023",
      director: "Christopher Nolan",
      desc: "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far",
    },
    {
      id: "6",
      name: "Fast X",
      img: img6,
      rating: "",
      release: "2023",
      director: "Louis Letterier",
      desc: "The end of the road begins. Fast X, the tenth film in the Fast & Furious Saga, launches the final chapters of one of cinema’s most storied and popular global franchises.",
    },
    {
      id: "7",
      name: "Indiana Jones",
      img: img7,
      rating: "",
      release: "2023",
      director: "James Mamgold",
      desc: "Harrison Ford returns as the legendary hero archaeologist in the highly anticipated fifth installment of the iconic “Indiana Jones” franchise.",
    },
    {
      id: "8",
      name: "John Wick",
      img: img8,
      rating: "",
      release: "2023",
      director: "Chad Stahelski",
      desc: "John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth instalment of the series.",
    },
    {
      id: "9",
      name: "MEG 2",
      img: img9,
      rating: "",
      release: "2023",
      director: "Ben Wheatley",
      desc: "Jason Statham and global action icon Wu Jing lead a daring research team on an exploratory dive into the deepest depths of the ocean.",
    },
    {
      id: "10",
      name: "SAW X",
      img: img10,
      rating: "",
      release: "2023",
      director: "Kevin Greutert",
      desc: "John Kramer (Tobin Bell) is back. The most disturbing installment of the Saw franchise yet explores the untold chapter of Jigsaw’s most personal game.",
    },
  ];
  const movies = await getMovies();
  localStorage.setItem("movies", JSON.stringify(movies));
}

//return movies list from LS
export function getMoviesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("movies"));
}

//date formatter
export function getFormattedDate(day, month, year) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${day} ${months[month]} ${year}`;
}

//movie showtimes list
export function movieShowtimesList() {
  const list = [
    {
      time: "10:30 a.m",
      name: "Barbie",
      language: "English",
      screen: "Standard",
    },
    {
      time: "11:30 a.m",
      name: "Oppenheimer",
      language: "English",
      screen: "Xtreme",
    },
    {
      time: "1:00 p.m",
      name: "Barbie",
      language: "English",
      screen: "Standard",
    },
    {
      time: "2:30 p.m",
      name: "Talk to me",
      language: "English",
      screen: "Xtreme",
    },
    {
      time: "2:30 p.m",
      name: "Elemental",
      language: "English",
      screen: "Standard",
    },
    {
      time: "3:00 p.m",
      name: "Elemental",
      language: "Greek",
      screen: "Standard",
    },
    {
      time: "4:00 p.m",
      name: "Mission Impossible",
      language: "English",
      screen: "Xtreme",
    },
  ];
  return list;
}

//initialize reviews list in LS
export function initReviewsLocalStorage() {
  localStorage.setItem("reviews", JSON.stringify([]));
}

//add reviews to review list in LS
export function pushReviewLocalStorage(obj) {
  const existingReviews = JSON.parse(localStorage.getItem("reviews"));
  existingReviews.push(obj);
  localStorage.setItem("reviews", JSON.stringify(existingReviews));
  // calculateAvgRating();
}

//return reviews list from LS
export function getReviewsLocalStorage() {
  return JSON.parse(localStorage.getItem("reviews"));
}

//remove review from review list in LS
export function deleteReviewLocalStorage(obj) {
  const existingReviews = JSON.parse(localStorage.getItem("reviews"));

  //in the existing reviews list check movie id and user email and filter the list
  if (existingReviews) {
    const updatedReviews = existingReviews.filter(
      (review) => review.movie !== obj.movie || review.user !== obj.user
    );
    // calculateAvgRating();
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  }
}

//initiailize avgrating in LS
export function initAvgRating() {
  localStorage.setItem("avgRating", JSON.stringify([]));
}

//calculate avg rating for each movie
export function calculateAvgRating() {
  const reviewsArray = getReviewsLocalStorage();
  const movieList = getMoviesFromLocalStorage();

  //iterate through movielist , for each movie filter based on movie id and id from review array
  const updatedList = movieList.map((obj) => {
    const filteredArr = reviewsArray?.filter(
      (review) => review?.movie === obj?.id
    );

    //now for the filteredlist for each obj calculate avg and push in rating key value
    if (filteredArr?.length > 0) {
      const ratingsArr = filteredArr.map((rating) => rating.rating);
      const total = ratingsArr.reduce((total, rating) => total + rating, 0);
      const avg = total / ratingsArr.length;
      return { ...obj, rating: avg };
    } else {
      return { ...obj, rating: 0 };
    }
  });
  localStorage.setItem("movies", JSON.stringify(updatedList));
}

//true if user is blocked from reviewing movie
export function checkReviewBlocked() {
  const reviews = getReviewsLocalStorage();
  const user = getLoggedInUserLocalStorage();

  //if user has done more than 8 reviews and the majority of the rating is less than 3 then user is blocked from reviewing
  if (reviews?.length > 0) {
    const reviewsByUserArr = reviews?.filter((obj) => obj.user === user?.email);
    const totalReviewsByUser = reviewsByUserArr?.length;
    const negativeReviewsArr = reviewsByUserArr?.filter(
      (obj) => obj.rating < 3
    );
    const totalNegativeReviews = negativeReviewsArr?.length;
    if (totalReviewsByUser >= 8) {
      if (totalNegativeReviews > totalReviewsByUser - totalNegativeReviews) {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//delete account
export function deleteUserAccount() {
  const reviews = getReviewsLocalStorage();
  const user = getLoggedInUserLocalStorage();
  //deleting the reviews by the user
  if (reviews) {
    const updatedReviews = reviews.filter(
      (review) => review.user !== user?.email
    );

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  }
  //deleting the user from the userslist
  const allUsers = getUsersFromLocalStorage();
  if (allUsers) {
    const updatedUsers = allUsers?.filter((obj) => obj.email !== user?.email);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
  //calculating avg after deleting the reviews
  // calculateAvgRating();
  //setting login flag to false
  setLoginFlag(false);
  //setting loggedin user to null
  setLoggedInUserLocalStorage([]);
}
