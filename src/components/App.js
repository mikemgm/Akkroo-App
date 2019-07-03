import React, {Component} from "react";
import SearchBar from "./SearchBar.js"; 
import youtube from "../apis/youtube";
import VideosList from "./VideosList";
import VideoPlayer from "./VideoPlayer";


class App extends Component {
    state = {videos: [], selectedVideo: null }


    componentDidMount() {
        this.onVideoSubmit("twitter");
    };

    onVideoSubmit = async (video) => {
        const response = await youtube.get("/search", {
            params: {
                q: video
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onVideoSubmit={this.onVideoSubmit} />
                <VideoPlayer video = {this.state.selectedVideo}/>
                <VideosList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos} />
            </div>
        )
    }
        
}
 
export default App;