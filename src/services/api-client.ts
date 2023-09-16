import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3286a7c746ff4406bc5948310e166dab",
  },
});
