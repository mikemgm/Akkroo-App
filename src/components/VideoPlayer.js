import React from "react"; 

const VideoPlayer = ({video}) => {
    if(!video) {
        return <div></div>
    }
    return(
        <div>{video.snippet.title}</div>
    );

}; 


export default VideoPlayer; 