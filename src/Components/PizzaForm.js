import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PizzaForm = () => {
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
  const handleChangesize = (size) => {
    setSize(size);
  };
  const [custDetails, setCustDetails] = useState({
    fName: "",
    lName: "",
    number: "",
    street: "",
    aptNumber: "",
    city: "",
    floor: "",
  });
  const handleChange = (type, val) => {
    setCustDetails({
      ...custDetails,
      [type]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!size) {
      toast.error("Size must be selected", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        style: {
          marginTop: "100px",
        },
      });
    }
    const selected = options.filter((option) => option.checked);
    if (selected.length < 2) {
      toast.error("Atleast 2 toppings must be selected", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        style: {
          marginTop: "100px",
        },
      });
    }
    const aptNumber = parseInt(custDetails.aptNumber);
    const floor = parseInt(custDetails.floor);

    if (isNaN(aptNumber) || isNaN(floor) || aptNumber < 1 || floor < 1) {
      toast.error("Number cannot be 0 or float", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        style: {
          marginTop: "100px",
        },
      });
      return false;
    }
    const pizzaOrder = {
      size,
      options: selected,
      custDetails,
    };
    const pizzaOrderJSON = JSON.stringify(pizzaOrder);
    localStorage.setItem("pizzaOrder", pizzaOrderJSON);
    toast.success("Successfully ordered pizza!", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      style: {
        marginTop: "100px",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-[70%]">
      <>
        <div className="bg-[#f3f4f6]  p-4 border border-gray-300 shadow-md">
          <div className="flex justify-center">
            <button
            type="button"
              onClick={() => handleChangesize("small")}
              className={`${
                size === "small" ? "bg-[#7882eb69]" : "bg-white "
              } border-2 border-[#333232]  py-1 w-full   font-semibold`}
            >
              Small
            </button>
            <button
            type="button"
              onClick={() => handleChangesize("medium")}
              className={`${
                size === "medium" ? "bg-[#7882eb69]" : "bg-white "
              }  border-2 border-[#333232] py-1 w-full   font-semibold`}
            >
              Medium
            </button>
            <button
            type="button"
              onClick={() => handleChangesize("large")}
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
          <>
            <div className="bg-transparent  mt-10">
              <p className="text-xl font-bold">Customer Details</p>
              <div className="flex flex-wrap">
                <input
                  required
                  onChange={(e) => handleChange("fName", e.target.value)}
                  type="text"
                  id="fName"
                  className="m-1 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                  placeholder="Fisrt Name"
                />
                <input
                  required
                  onChange={(e) => handleChange("lName", e.target.value)}
                  type="text"
                  id="lName"
                  className="m-1 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                  placeholder="Last Name"
                />
                <input
                  required
                  onChange={(e) => handleChange("number", e.target.value)}
                  type="text"
                  id="number"
                  className="m-1 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                  placeholder="Phone Number"
                />
              </div>
              <p className="text-xl font-bold mt-10">Delivery Details</p>
              <div className="flex flex-wrap ">
                <input
                  required
                  onChange={(e) => handleChange("street", e.target.value)}
                  type="text"
                  id="street"
                  className="m-1 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                  placeholder="Street"
                />
                <input
                  required
                  onChange={(e) => handleChange("aptNumber", e.target.value)}
                  type="text"
                  id="aptNumber"
                  className="m-1 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                  placeholder="Apartment Number"
                />
                <input
                  required
                  onChange={(e) => handleChange("city", e.target.value)}
                  type="text"
                  id="city"
                  className="m-1 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                  placeholder="City"
                />
                <input
                  required
                  onChange={(e) => handleChange("floor", e.target.value)}
                  type="text"
                  id="floor"
                  className="m-1 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
                  placeholder="Floor"
                />
              </div>
            </div>
          </>
          <button
            type="submit"
            className="mt-4 btn-submit flex justify-center bg-blue-400 rounded-md border border-white p-2"
          >
            Submit
          </button>
        </div>
      </>
    </form>
  );
};

export default PizzaForm;
