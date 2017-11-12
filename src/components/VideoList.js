import React, { Component } from "react"
import VideoListItem from "./VideoListItem"
import {List} from 'material-ui/List';

const VideoList = ({videos, selectedVideo,handleVideoSelect}) => {
  const videoItems = videos.map((video) => {
    return <VideoListItem selectedVideo={selectedVideo} handleVideoSelect={handleVideoSelect} key={video.etag} video={ video }></VideoListItem>
  })

  return(
    <List>
      {videoItems}
    </List>
  )

}
export default VideoList