import axios from "axios" 

const KEY = "AIzaSyB2M62-t-MhURUpLvEVf53e4ElndWV2Kz4"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5, 
        key: KEY
    }
});