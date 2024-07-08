import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params : {
        key:'cbc5f52e40dc4f1e894aed6da73b43d8'
    }
})