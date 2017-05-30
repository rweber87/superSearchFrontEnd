// will call the api to grab all photos
// will will set the wrapper to place photos
// will contain the logic to add or remove photos
import React from 'react'
import Photo from './Photo'
import { getFlickrPhotos } from '../api'


export default class PhotoLister extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    if(this.props.searchTerm){
      this.fetchFlickrPhotos(this.props.searchTerm)
    }
  }

  componentWillReceiveProps(nextProps){
    this.fetchFlickrPhotos(nextProps.searchTerm)
  }

  fetchFlickrPhotos(searchTerm){
    getFlickrPhotos(searchTerm).then(response => {
      let photos = response.data.photos.photo.map((photo)=>
        `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      )
      this.setState({
        photos: photos
      })
    })
  }

  render(){
    let photos = this.state.photos
    let photoDisplay = photos.map((photo, i) => <Photo key={i} photo={photo}/>)
    return (
      <div className="photoPlane">
        { photoDisplay }
      </div>
    )
  }


}// end PhotoLister


