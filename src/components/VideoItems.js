import React from "react";
import style from "./styles/VideoItemStyle.css";

export default function VideoItems({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="ui items">
      <div class="item">
        <div class="image">
          <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        </div>
        <div class="content">
          <a class="header">{video.snippet.title}</a>
          <div class="description">
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
