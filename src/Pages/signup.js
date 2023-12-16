import React, { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import {
  appendUserInLocalStorage,
  getFormattedDate,
  getUsersFromLocalStorage,
  setLoggedInUserLocalStorage,
  setLoginFlag,
} from "../Commons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSignup } from "../Repository/userData";

const Signup = () => {
  const date = new Date();
  const users = getUsersFromLocalStorage();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    joined: "",
  });

  useEffect(() => {
    //initializing user ids , if no user exists then id is 1 if users exists then taking the last user and adding 1 to its id
    setUserDetails({
      id: "",
      name: "",
      email: "",
      password: "",
      joined: getFormattedDate(
        date.getDate(),
        date.getMonth(),
        date.getFullYear()
      ),
    });
  }, []);

  //input tags handle change
  const handleChange = (type, data) => {
    setUserDetails({
      ...userDetails,
      [type]: data,
    });
  };

  //function to check if user with same email is already existing in user list
  const userAlreadyExists = (email) => {
    //checking if user with same email exists
    const users = getUsersFromLocalStorage() || [];
    const emailMatched = users.map(
      (obj) => obj.email.toLowerCase() === email.toLowerCase()
    );

    return emailMatched.includes(true);
  };

  //signup click function   
  const signupClick = async (e) => {
    e.preventDefault();
    const user= await userSignup(userDetails);
    if(user==null){
      toast.error("User with same email already exists !", {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            style: {
              marginTop: "100px",
            },
          });
    }else{
      setLoginFlag(true);
      setLoggedInUserLocalStorage(user);
      navigate('/profile')
      toast.success("Successfully Signed Up!", {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            style: {
              marginTop: "100px",
            },
          });
    }
    //checking if user already exists if exists then error popup
    // if (userAlreadyExists(userDetails?.email)) {
    //   toast.error("User with same email already exists !", {
    //     position: toast.POSITION.TOP_CENTER,
    //     hideProgressBar: true,
    //     style: {
    //       marginTop: "100px",
    //     },
    //   });
    // } else {
      //if user doesnt exists - add the userobj to userlist , set login flag , set loggedin user and redirect to home page
    //   appendUserInLocalStorage(userDetails);
    //   setLoginFlag(true);
    //   setLoggedInUserLocalStorage(userDetails);
    //   navigate("/profile");
    //   toast.success("Successfully Signed Up!", {
    //     position: toast.POSITION.TOP_RIGHT,
    //     hideProgressBar: true,
    //     style: {
    //       marginTop: "100px",
    //     },
    //   });
    // }
  };
  return (
    <>
      <div className="flex justify-center items-center mt-10 text-white">
        <div className="w-[40%] p-6 shadow-lg bg-[#272121] rounded-xl">
          <h1 className="text-3xl block text-center font-semibold p-4">
            {" "}
            Sign Up
          </h1>
          <form onSubmit={signupClick}>
            <div className="mt-3">
              <label for="username" className="block text-base mb-2">
                Name
              </label>
              <input
                required
                onChange={(e) => handleChange("name", e.target.value)}
                type="text"
                id="name"
                className="border-b w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                placeholder="Enter Name..."
              />
            </div>
            <div className="mt-3">
              <label for="username" className="block text-base mb-2">
                Email
              </label>
              <input
                required
                onChange={(e) => handleChange("email", e.target.value)}
                type="email"
                id="username"
                className="border-b w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                placeholder="Enter Email..."
              />
            </div>
            <div className="mt-3">
              <label for="password" className="block text-base mb-2">
                Password
              </label>
              <input
                required
                onChange={(e) => handleChange("password", e.target.value)}
                type="password"
                id="password"
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                className="bg-transparent w-full text-base px-2 py-1 border-b focus:outline-none focus:ring-0 focus:border-[#ff2e38]"
                placeholder="Enter Password..."
              />
              <div className="mt-4 text-xs font-thin text-slate-400">
                At least one uppercase,number and a special character , minimum
                length 8 characters
              </div>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="border-2 border-[#ff2e38] bg-[#ff2e38] text-white py-1 w-full rounded-md hover:bg-transparent hover:text-[#ff2e38] font-semibold"
                data-testid = 'signup'
              >
                &nbsp;&nbsp;Sign Up
              </button>
            </div>
          </form>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <Link to="/login">
                <a href="/signup" className="text-[#ff2e38] font-semibold">
                  Already registered ? Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
