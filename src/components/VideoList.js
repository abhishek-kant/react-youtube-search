import React, { Component } from "react"
import VideoListItem from "./VideoListItem"
import {List} from 'material-ui/List';

const VideoList = (props) => {
  const videos = props.videos;
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={ video }></VideoListItem>
  })

  return(
    <List>
      {videoItems}
    </List>
  )

}
export default VideoList