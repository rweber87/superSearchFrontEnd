import React from 'react'

const Video = (props) => {
  let video = props.video
  let videoId = video.videoId

  return (
    <div className="video">
      <iframe title={videoId} src={"https://www.youtube.com/embed/"+videoId} width="400px" height="260px"></iframe>
    </div>
  )
}

export default Video
