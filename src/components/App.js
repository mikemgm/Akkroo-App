import React, {Component} from "react";
import SearchBar from "./SearchBar.js"; 
import youtube from "../apis/youtube";
import VideosList from "./VideosList";
import VideoPlayer from "./VideoPlayer";


class App extends Component {
    state = {videos: [], selectedVideo: null }
    onVideoSubmit = async (video) => {
        const response = await youtube.get("/search", {
            params: {
                q: video
            }
        });

        this.setState({ videos: response.data.items })
    };

    onVideoSelect = (video) => {
        console.log("this video", video);
        // this.setState({ selectedVideo: video})
    }

    render() {
        return(
            <div className="ui container">
            <SearchBar onVideoSubmit={this.onVideoSubmit} />
            <VideosList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} />
            <VideoPlayer video = {this.state.selectedVideo}/>
            </div>
        )
    }
        
}
 
export default App;