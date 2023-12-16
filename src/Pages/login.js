import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getUsersFromLocalStorage,
  setLoggedInUserLocalStorage,
  setLoginFlag,
} from "../Commons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from "../Repository/userData";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function userNameHandleChange(data) {
    setUserName(data);
  }
  function passwordHandleChange(data) {
    setPassword(data);
  }

  async function loginButtonClick(e) {
    e.preventDefault();
    const user = await userLogin(username, password);
    if (user == null) {
      toast.error("Invalid email or password!", {
        position: toast.POSITION.TOP_CENTER,

        hideProgressBar: true,

        style: {
          marginTop: "100px",
        },
      });
    } else {
      setLoginFlag(true);
      setLoggedInUserLocalStorage(user);
      navigate("/profile");
      toast.success("Successfully Logged in", {
        position: toast.POSITION.TOP_RIGHT,

        hideProgressBar: true,

        style: {
          marginTop: "100px",
        },
      });
    }
    //getting all users from local storage and checking the entered email and password if matched
    //setting login flag true and setting loggedinuser else error message
    // const userObj1 = getUsersFromLocalStorage();
    // if (userObj1 && Object.keys(userObj1)?.length > 0) {
    //   const user = userObj1.find((user) => user.email === username);

    //   if (user && user.password === password) {
    //     navigate("/profile");

    //     setLoginFlag(true);

    //     setLoggedInUserLocalStorage(user);

    //     toast.success("Successfully Logged in", {
    //       position: toast.POSITION.TOP_RIGHT,

    //       hideProgressBar: true,

    //       style: {
    //         marginTop: "100px",
    //       },
    //     });

    //     //dispatch(setLoggedInUser(user));
    //   } else {
    //     toast.error("Invalid email or password!", {
    //       position: toast.POSITION.TOP_CENTER,

    //       hideProgressBar: true,

    //       style: {
    //         marginTop: "100px",
    //       },
    //     });
    //   }
    // } else {
    //   toast.error("User not found!", {
    //     position: toast.POSITION.TOP_CENTER,

    //     hideProgressBar: true,

    //     style: {
    //       marginTop: "100px",
    //     },
    //   });
    // }
  }
  return (
    <>
      <div className="flex justify-center items-center mt-10 text-white">
        <div className="w-[40%] p-6 shadow-lg bg-[#272121] rounded-xl">
          <h1 className="text-3xl block text-center font-semibold p-4">
            {" "}
            Login
          </h1>
          <div className="mt-3">
            <label for="username" className="block text-base mb-2">
              Email
            </label>
            <input
              onChange={(e) => userNameHandleChange(e.target.value)}
              type="text"
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
              onChange={(e) => passwordHandleChange(e.target.value)}
              type="password"
              id="password"
              className="bg-transparent  w-full text-base px-2 py-1 border-b focus:outline-none focus:ring-0 focus:border-[#ff2e38]"
              placeholder="Enter Password..."
            />
          </div>
          <div className="mt-5">
            <button
              onClick={(e) => {
                loginButtonClick(e);
              }}
              className="border-2 border-[#ff2e38] bg-[#ff2e38] text-white py-1 w-full rounded-md hover:bg-transparent hover:text-[#ff2e38] font-semibold"
              data-testid = 'login'
            >
              &nbsp;&nbsp;Login
            </button>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <Link to="/signup">
                <a href="/signup" className="text-[#ff2e38] font-semibold">
                  Dont have an account? Sign Up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
