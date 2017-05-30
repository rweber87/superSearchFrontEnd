import React from 'react'
import Video from './Video'
import { getYoutubeVideos } from '../api'


export default class VideoLister extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      videos: []
    }
  }


  componentWillReceiveProps(nextProps){
  	this.fetchYoutubeVideos(nextProps.searchTerm)
  }

  fetchYoutubeVideos(searchTerm){
    getYoutubeVideos(searchTerm).then( response => {
      let videos = response.data.items.map((video) => Object.assign(video.snippet, video.id))
      this.setState({
        videos: response.data.items.map((video) => Object.assign(video.snippet, video.id))
      })
    })
  }

  render(){
    let videos = this.state.videos
    let videoDisplay = videos.map((video) => <Video video={video}/>)
    return (
      <div className="videoPlane">
        { videoDisplay }
      </div>
    )
  }


}// end VideoLister
