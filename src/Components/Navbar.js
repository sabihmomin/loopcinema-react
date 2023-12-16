import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getLoggedInUserLocalStorage,
  getLoginFlag,
  setLoginFlag,
} from "../Commons";
const Navbar = () => {
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    //navbar scrolling hide and display events
    const scroll = () => {
      if (window.scrollY > 200) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  //user dropdown
  function menuClickHandle() {
    setDropdown(!dropdown);
  }

  const signOutClick = () => {
    setDropdown(false);
    setLoginFlag(false);
    navigate("/");
  };

  const profileClick = () => {
    setDropdown(false);
    navigate("/profile");
  };
  return (
    <div
      className={`sticky top-0 z-50 bg-opacity-50 backdrop-blur-lg backdrop-filter bg-[#272121] rounded-lg ${
        show ? "" : "hideNavbar"
      }`}
    >
      <div className="flex justify-between items-center h-24 mx-auto px-4 text-white">
        <div className="mt-[1%] ml-[-4%] w-[25%]">
          <img src="assets/logo.png"></img>
        </div>
        <div className="flex items-center justify-center">
          <img
            width={"50%"}
            height={"10%"}
            src="assets/loop.png"
            alt="Loop Image"
          />
        </div>
        <div>
          <ul className="hidden lg:flex">
            <li className="p-4 hover:text-[#ff2e38]" onClick={() => setDropdown(false)}>
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 hover:text-[#ff2e38]" onClick={() => setDropdown(false)}>
              <Link to="/movies">Movies</Link>
            </li>
            <li className="p-4">
              {getLoginFlag() ? (
                <>
                  <button
                    className="bg-transparent outline-none inline-flex justify-center gap-x-1.5 hover:text-[#ff2e38] "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={menuClickHandle}
                  >
                    Welcome , {getLoggedInUserLocalStorage()?.name}
                    <svg
                      className="-mr-1 h-5 w-5 text-white mt-1 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute mr-[5%] right-0 z-20 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  bg-[#272121]  ${
                      !dropdown ? "hidden" : ""
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div class="py-1 z-30 p-2 rounded-2xl" role="none">
                      <a
                        className=" block px-2 py-2 text-sm text-white hover:bg-[#ff2e38] rounded-lg"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                        onClick={profileClick}
                      >
                        MY PROFILE
                      </a>
                      <a
                        className=" block px-2 py-2 text-sm text-white hover:bg-[#ff2e38] rounded-lg"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                        onClick={signOutClick}
                      >
                        SIGN OUT
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
            </li>
            <li className="p-4">
              {getLoginFlag() ? (
                <>
                  <Link to="/profile">
                    <img className="bg-[#ff2e38]"></img>
                  </Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
