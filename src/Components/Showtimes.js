import React, { useEffect, useState } from "react";
import { getMoviesFromLocalStorage, movieShowtimesList } from "../Commons";
import { Rating } from "@smastrom/react-rating";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "@smastrom/react-rating/style.css";
import { getSessions } from "../Repository/sessionsData";
import TicketModal from "./TicketModal";

const Showtimes = () => {
  const [sessionsList, setSessionsList] = useState([]);
  const [open, setOpen] = useState(false);
  const [sessionObj, setSessionObj] = useState();
  const onOpenModal = (obj) => {
    setOpen(true);
    setSessionObj(obj);
  };
  const onCloseModal = () => setOpen(false);
  useEffect(() => {
    const fetchSessions = async () => {
      const sessions = await getSessions();
      setSessionsList(sessions);
    };
    fetchSessions();
  }, []);
  const date = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const fetchSessions = async () => {
    const sessions = await getSessions();
    setSessionsList(sessions);
  };
  return (
    <>
      <div className="text-3xl text-[#ff2e38] font-extrabold mt-12 ml-16">
        {formattedDate}
      </div>
      <div className="w-[90%] mt-10 ml-16 flex justify-center shadow-lg">
        <table className="text-white  w-[100%] bg-transparent font-bold">
          <tbody className="">
            {sessionsList?.length > 0 &&
              sessionsList?.map((obj) => {
                return (
                  <tr>
                    <td className="border-b border-[#ff2e38] text-left px-4 py-2">
                      {obj?.timing}
                    </td>
                    <td className="border-b border-[#ff2e38] text-left px-4 py-2">
                      {obj?.movie?.name}
                    </td>
                    <td className="border-b border-[#ff2e38] text-left px-4 py-2">
                      English
                    </td>
                    <td className="border-b border-[#ff2e38] text-left px-4 py-2">
                      Standard
                    </td>
                    <td className="border-b border-[#ff2e38] text-left px-4 py-2 ">
                      <Rating
                        value={obj?.movie?.avgRating}
                        readOnly
                        style={{ maxWidth: 100 }}
                      />
                    </td>
                    <td className="border-b border-[#ff2e38] text-left px-4 py-2 ">
                      <button
                        className="bg-[#ff2e38] m-2 p-1 rounded-md text-xs w-28 text-center font-bold text-white"
                        onClick={() => {
                          onOpenModal(obj);
                        }}
                      >
                        Get Tickets
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: `${"customModal"}`,
        }}
      >
        <TicketModal sessionObj={sessionObj} onCloseModal={onCloseModal} fetchSessions={fetchSessions}/>
      </Modal>
    </>
  );
};

export default Showtimes;
