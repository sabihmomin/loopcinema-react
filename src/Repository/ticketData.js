import axios from "axios";

const API_HOST = "http://localhost:4000/api/ticket";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export async function reserveTicket(ticketObj) {
  const data = {
    movieId:ticketObj?.movieId,
    userId:ticketObj?.userId,
    noOfTickets:ticketObj?.noOfTickets,
    sessionId:ticketObj?.sessionId
  };
  const response = await axios.post(
    API_HOST + "/reserveTicket",
    data,
    config
  );
  const ticket = response.data;

  return ticket;
}

export async function getTicketsByUserId(userId) {
    const data = {
      userId:userId
    };
    const response = await axios.post(
      API_HOST + "/getTickets",
      data,
      config
    );
    const tickets = response.data;
  
    return tickets;
  };