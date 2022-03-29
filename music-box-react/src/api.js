import axios from "axios";
const api = axios.create({
    baseURL: "https://62423a5eb6734894c14e7a5e.mockapi.io/music"
})

export default api;