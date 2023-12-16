import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { getLoggedInUserLocalStorage } from "../Commons";
import { reserveTicket } from "../Repository/ticketData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketModal = (props) => {
  const { sessionObj ,onCloseModal,fetchSessions} = props;
  const [tickets,setTickets]=useState(1);

  const handleChange=(e)=>{
    setTickets(e.target.value)
  }
  async function confirmTicket(){
    const body={
      movieId:sessionObj?.movie?.id,
      sessionId:sessionObj?.sessionId,
      userId:getLoggedInUserLocalStorage()?.userId,
      noOfTickets:parseInt(tickets)
    }
    if(sessionObj?.totalTix - sessionObj?.bookedTix < tickets){
      toast.error("Cannot be greater than available seats", {
        position: toast.POSITION.TOP_CENTER,

        hideProgressBar: true,

        style: {
          marginTop: "60px",
        },
      });
    }else{
      const ticketRes=await reserveTicket(body);
      if(ticketRes){
        toast.success("Ticket reserved Successfully", {
          position: toast.POSITION.TOP_CENTER,
  
          hideProgressBar: true,
  
          style: {
            marginTop: "60px",
          },
        });
      }else{
        toast.error("Error in ticket reservation", {
          position: toast.POSITION.TOP_CENTER,
  
          hideProgressBar: true,
  
          style: {
            marginTop: "60px",
          },
        });
      }
      onCloseModal();
      fetchSessions();
    }
    

  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="font-extrabold text-4xl text-white mb-4">
          {sessionObj?.movie?.name}
        </div>
        <div className="rating mt-4">
          <Rating
            value={sessionObj?.movie?.avgRating}
            readOnly
            style={{ maxWidth: 100 }}
          />
        </div>
        <div className="mt-6 text-white  flex">
          <div className="font-bold text-3xl">{sessionObj?.timing} |&nbsp;</div>{" "}
          <div className="mt-2 font-light text-xl"> Standard Screen</div>
        </div>
        <div className="flex mt-10 justify-between">
          <div className="text-xl text-white font-bold">
            Select number of seats :&nbsp;
          </div>
          <div>
            <select value={tickets} onChange={(e)=>handleChange(e)}className="mt-1 w-20 border border-[#ff2e38] bg-transparent text-[#ff2e38]">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
        </div>
        <div className="text-sm italic text-gray-600 mt-6">
          Available seats : {sessionObj?.totalTix - sessionObj?.bookedTix}
        </div>
        <div >
            <button onClick={confirmTicket}className="mt-12 bg-[#ff2e38] m-2 p-1 rounded-md text-lg w-40 text-center font-bold text-white">
                Reserve Tickets
            </button>
        </div>
      </div>
    </>
  );
};
export default TicketModal;
