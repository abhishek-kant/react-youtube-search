import React, { Component } from "react"
import { ListItem } from 'material-ui/List';

const VideoListItem = ({video, selectedVideo,handleVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url
  return(
    <ListItem disabled={video.etag == selectedVideo.etag} onClick={() => { handleVideoSelect(video) }}   primaryText={ video.snippet.title } leftIcon={ <img src={imageUrl} />}></ListItem>
  )
}


export default VideoListItem