import React , {useState}from "react";

const CustomerDetails = () => {
    const [custDetails,setCustDetails]=useState({
        fName:"",
        lName:"",
        number:"",
        street:"",
        aptNumber:"",
        city:"",
        floor:""

    })
    const handleChange = (type, val) => {
        setCustDetails({
          ...custDetails,
          [type]: val,
        });
      };
  return (
    <>
      <div className="bg-transparent w-[70%] mt-10">
        <p className="text-xl font-bold">Customer Details</p>
        <div className="flex ">
          <input
            required
            onChange={(e) => handleChange("fName", e.target.value)}
            type="text"
            id="fName"
            className="m-3 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
            placeholder="Fisrt Name"
          />
          <input
            required
            onChange={(e) => handleChange("lName", e.target.value)}
            type="text"
            id="lName"
            className="m-3 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
            placeholder="Last Name"
          />
          <input
            required
            onChange={(e) => handleChange("number", e.target.value)}
            type="text"
            id="number"
            className="m-3 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
            placeholder="Phone Number"
          />
        </div>
        <p className="text-xl font-bold mt-10">Delivery Details</p>
        <div className="flex ">
          <input
            required
            onChange={(e) => handleChange("street", e.target.value)}
            type="text"
            id="street"
            className="m-3 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
            placeholder="Street"
          />
          <input
            required
            onChange={(e) => handleChange("aptNumber", e.target.value)}
            type="text"
            id="aptNumber"
            className="m-3 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
            placeholder="Apartment Number"
          />
          <input
            required
            onChange={(e) => handleChange("city", e.target.value)}
            type="text"
            id="city"
            className="m-3 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
            placeholder="City"
          />
          <input
            required
            onChange={(e) => handleChange("floor", e.target.value)}
            type="text"
            id="floor"
            className="m-3 border-b  text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-[#ff2e38] bg-transparent"
            placeholder="Floor"
          />
        </div>
      </div>
    </>
  );
};
export default CustomerDetails;
