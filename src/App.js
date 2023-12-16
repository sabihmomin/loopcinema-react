import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Home from "./Pages/home";
import Signup from "./Pages/signup";
import Profile from "./Pages/profile";
import { calculateAvgRating, getMoviesFromLocalStorage, initAvgRating, initReviewsLocalStorage, setLoginFlag, setMoviesInLocalStorage } from "./Commons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer";
import MoviesPage from "./Pages/MoviesPage";

function App() {
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    //initializing loginflag , review , movies and avgratings in LS
    if(!localStorage.getItem("loginFlag")){
      setLoginFlag(false)
    }
    setMoviesInLocalStorage();
    if (!localStorage.getItem("reviews")) {
      initReviewsLocalStorage();
    }
    if(!localStorage.getItem("avgRatings")){
      initAvgRating();
    }
    // calculateAvgRating();
  }, []);

    return (  
    //defining routes
    <Router>
        <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/movies" element={<MoviesPage />}></Route>
      </Routes>
      <>
        <Footer/>
      </>
      <ToastContainer/>
    </Router>
  );
}

export default App;
