import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoListPayload: [],
      videoListError: "",
      selectedVideo: null
    };
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  componentDidMount(){
      this.onTermSubmit('Makan Enak')
  }


   onTermSubmit = async (term) => {
    try {
      let result = {};
      const response = await youtube
        .get("/search", {
          params: {
            part:'snippet',
            maxResults:25,
            q: term
          }
        }).then(response => {
                console.log("Success:", response.data.items);
                
              })
              .catch(error => {
                console.log("Error:", error.response);
                this.setState({
                  videoListError: {
                    message: error.response.data,
                    status: error.response.status
                  }
                });
              });
      

    this.setState({ 
        videoListPayload: response.data.items,
        selectedVideo:response.data.items[0] 
    });
    
    
    } catch (error) {
      this.setState({ videoListError: "Request failed" });
    }
  };

  // A promise is an object that may produce a single value some time in the future:
  // either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
  // A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks
  // to handle the fulfilled value or the reason for rejection.

  // JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. In browsers, JavaScript shares a thread with a load of other stuff that differs from browser to browser.
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui three column grid">
        <div className="ui row">
            <div className="ten wide column"><VideoDetail video={this.state.selectedVideo} /></div>
            <div className="column">
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videoListPayload}
            /></div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
