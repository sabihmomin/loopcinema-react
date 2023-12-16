import React from "react";

const Locations = () => {
  return (
    <>
      <div className="flex items-end">
        <div className="text-3xl font-extrabold  text-white mt-12 ml-16 ">
          CINEMA LOCATIONS{" "}
        </div>
      </div>
      <hr className="m-16 mt-4 mb-0" style={{ borderColor: "#ff2e38" }} />
      <div className="flex justify-evenly text-white ml-6 mt-10">
        <div className="relative w-64 h-64 group">
          <img
            src="assets/melbourne.jpg"
            alt="Melbourne"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-white text-2xl font-bold">MELBOURNE</p>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <ul className="text-white list-disc">
              <li className="m-1">Crown Melbourne</li>
              <li className="m-1">Melbourne Central</li>
              <li className="m-1">QV mall</li>
              <li className="m-1">Chadstone shopping centre</li>
            </ul>
          </div>
        </div>
        <div className="relative w-64 h-64 group">
          <img
            src="assets/sydney.jpg"
            alt="Melbourne"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-white text-2xl font-bold">SYDNEY</p>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <ul className="text-white list-disc">
              <li className="m-1">Crown Sydney</li>
              <li className="m-1">Smith Mall</li>
              <li className="m-1">Bondi Shopping Centre</li>
            </ul>
          </div>
        </div>
        <div className="relative w-64 h-64 group">
          <img
            src="assets/brisbane.jpg"
            alt="Melbourne"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-white text-2xl font-bold">BRISBANE</p>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <ul className="text-white list-disc">
              <li className="m-1">Palace Barracks Brisbane</li>
              <li className="m-1">Crown Brisbane</li>
              <li className="m-1">LOOP Southbank</li>
              <li className="m-1">Brisbane Central</li>
            </ul>
          </div>
        </div>
        <div className="relative w-64 h-64 group">
          <img
            src="assets/goldcoast.jpg"
            alt="Melbourne"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-white text-2xl font-bold">GOLD COAST</p>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <ul className="text-white list-disc">
              <li className="m-1">Surfers Mall</li>
              <li className="m-1">GoldCoast Central</li>
              <li className="m-1">Lygon Court</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
