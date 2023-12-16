import React, { useState } from "react";

const PizzaSelection = () => {
  const [size, setSize] = useState("small");

  const [options, setOptions] = useState([
    { id: 1, label: "Sausage", checked: false },
    { id: 2, label: "Pepporoni", checked: false },
    { id: 3, label: "Ham", checked: false },
    { id: 4, label: "Olives", checked: false },
    { id: 5, label: "Bacon", checked: false },
    { id: 6, label: "Corn", checked: false },
    { id: 7, label: "Pineapple", checked: false },
    { id: 8, label: "Mushrooms", checked: false },
  ]);
  const handleCheckboxChange = (id) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      );
    });
  };
  const handleChange = (size) => {
    setSize(size);
  };
  return (
    <>
      <div className="bg-[#f3f4f6] w-[50%] p-4 border border-gray-300 shadow-md">
        <div className="flex justify-center">
          <button
            onClick={() => handleChange("small")}
            className={`${
              size === "small" ? "bg-[#7882eb69]" : "bg-white "
            } border-2 border-[#333232]  py-1 w-full   font-semibold`}
          >
            Small
          </button>
          <button
            onClick={() => handleChange("medium")}
            className={`${
              size === "medium" ? "bg-[#7882eb69]" : "bg-white "
            }  border-2 border-[#333232] py-1 w-full   font-semibold`}
          >
            Medium
          </button>
          <button
            onClick={() => handleChange("large")}
            className={`${
              size === "large" ? "bg-[#7882eb69]" : "bg-white "
            } border-2 border-[#333232]  py-1 w-full   font-semibold`}
          >
            large
          </button>
        </div>
        <div className="mt-10">
          <p className="font-extrabold text-xl">Toppings</p>

          <ul className="flex flex-wrap">
            {options.map((option) => (
              <li key={option.id} className="m-2">
                <label>
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => handleCheckboxChange(option.id)}
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default PizzaSelection;
