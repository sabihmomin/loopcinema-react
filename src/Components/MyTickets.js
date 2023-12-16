import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {
  getLoggedInUserLocalStorage,
} from "../Commons";
import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { getTicketsByUserId } from "../Repository/ticketData";

const MyTickets = () => {
  const [userTickets, setUserTickets] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //getting all the tickets booked by the loggedin user
    const fetchUserTickets=async(e)=>{
      const tickets=await getTicketsByUserId(getLoggedInUserLocalStorage()?.userId)
      setUserTickets(tickets)
    }
    fetchUserTickets();
  }, [open]);
  return (
    <>
      <div className="flex justify-center  text-white w-[100%] ">
        <div className="w-[100%] bg-[#272121] rounded-2xl h-[100%] overflow-y-auto p-8 ">
          <div className="text-3xl text-[#ff2e38] font-extrabold">
            My Tickets
          </div>
          {userTickets.length === 0 ? (
            <p>You havent booked any tickets yet.</p>
          ) : (
            <ul className="space-y-4">
              {userTickets.map((tickets, index) => (
                <li key={index} className="border-t border-[#ff2e38] pt-4">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                    <p className="font-semibold text-lg">{tickets?.movie?.name}</p>
                    <div className="flex items-center mt-2">
                        <span className="font-semibold text-white-600 text-sm">
                        Tickets: {tickets?.noOfTickets}
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;--||--
                        <span className="ml-4 font-semibold text-white-600 text-sm">
                        Booking Id: {tickets?.id}
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;--||--
                        <span className="ml-4 font-semibold text-white-600 text-sm">
                        Director: {tickets?.movie?.director}
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;--||--
                        <span className="ml-4 font-semibold text-white-600 text-sm">
                        Timing: {tickets?.session?.timing}
                        </span>
                    </div>
                    <p className="mt-1 text-gray-700" dangerouslySetInnerHTML={{ __html: tickets.comment }}></p>
                    </div>
                </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

    </>
  );
};

export default MyTickets;
