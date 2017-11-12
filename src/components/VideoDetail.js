import React from "react"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const VideoDetail = ({video}) => {
  if (!video){
    return <div>..loading</div>
  }

  const videoId = video.id.videoId;
  return(
    <card>
      <CardHeader title={video.snippet.title}/>

      <iframe id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameborder="0" />

      <CardTitle>{video.snippet.title}</CardTitle>
      <CardText>{video.snippet.description}</CardText>
    </card>
  )
}

export default VideoDetail