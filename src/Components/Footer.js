import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative bg-[#272121] text-white w-[100%] p-10 mt-10">
        <div className="flex justify-evenly">
          <div className="flex-col flex">
            <div>General</div>
            <hr className="mt-2" style={{ borderColor: "#ff2e38" }} />
            <div className="mt-5">FAQ</div>
            <div>About</div>
          </div>
          <div className="flex-col flex">
            <div>Contact</div>
            <hr className="mt-2" style={{ borderColor: "#ff2e38" }} />
            <div className="mt-5">+61-18000181</div>
            <div>custcare@loop.com</div>
          </div>
          <div className="flex-col flex">
            <div>Social Media</div>
            <hr className="mt-2" style={{ borderColor: "#ff2e38" }} />
            <div className="flex justify-between mt-5">
              <div className="h-7 w-7 mr-2">
                <img height={"100%"} width={"100%"} src="assets/twitter.png" />
              </div>
              <div className="h-7 w-7 mr-2">
                <img
                  height={"100%"}
                  width={"100%"}
                  src="assets/instagram.png"
                />
              </div>
              <div className="h-7 w-7 ">
                <img height={"100%"} width={"100%"} src="assets/facebook.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-7 font-light">
          <p className="mr-2">Copyright</p>
          <img height={"8px"} width={"20px"} src="assets/copyright.png" />
          <p className="ml-2">2023 LOOP CINEMAS PVT LTD. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
