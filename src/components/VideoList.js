import React from 'react'
import VideoItems from './VideoItems'

// ({ videos }) ->> simplify referencing this.props.videos
const VideoList = ({videos, onVideoSelect}) =>{
    let videoItems ={}
    const renderedList = videos.map((video)=>{
        if(video.id.kind==='youtube#video'){
            videoItems = video
            return (    
                <div className="ui relaxed divided list">
                        <VideoItems onVideoSelect={onVideoSelect} video={videoItems}/>
                </div>
                )
            }
    })

    return <div>{renderedList}</div>
}

export default VideoList

