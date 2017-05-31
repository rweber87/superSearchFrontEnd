import React from 'react'

const Video = (props) => {
  let video = props.video
  let videoId = video.videoId

  return (
    <div className="video">
      <iframe title={videoId} src={"https://www.youtube.com/embed/"+videoId} height="500px" width="650px"></iframe>
    </div>
  )
}

export default Video
