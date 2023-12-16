import axios from "axios";

const API_HOST = "http://localhost:4000/api/sessions";

export async function getSessions() {
    const response = await axios.get(
      API_HOST + "/getSessions"
    );
    const sessions = response.data;
  
    return sessions;
  }
  