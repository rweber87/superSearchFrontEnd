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


  componentDidMount(){
    if(this.props.searchTerm){
      this.fetchYoutubeVideos(this.props.searchTerm)
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.searchTerm.length > 0){
  	this.fetchYoutubeVideos(nextProps.searchTerm)
    }
  }
      

  fetchYoutubeVideos(searchTerm){
    getYoutubeVideos(searchTerm).then( response => {
      this.setState({
        videos: response.data.items.map((video) => Object.assign(video.snippet, video.id))
      })
    })
  }

  render(){
    let videos = this.state.videos
    let videoDisplay = videos.map((video, i) => <Video key={i} video={video}/>)
    return (
      <div className="videoPlane">
        { videoDisplay }
      </div>
    )
  }


}
