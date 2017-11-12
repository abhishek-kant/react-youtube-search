import React, { Component } from "react"
import { ListItem } from 'material-ui/List';

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url
  return(
    <ListItem  primaryText={ video.snippet.title } leftIcon={ <img src={imageUrl} />}></ListItem>
  )
}


export default VideoListItem