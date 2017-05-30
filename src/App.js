import React, { Component } from 'react';
import SearchForm from './searchForm'
import NavBar from './NavBar'
import NoteLister from './notelister/NoteLister'
import {getYoutubeVideos, getWikiSummary, getFlickrPhotos} from './api'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  constructor(){
    super()
     this.state = {
      title: '',
      videos: []
     }
  }

  handleAddTitle(event){
    event.preventDefault()
    let title = event.target.title.value

    getYoutubeVideos(title).then( response => {
      let videos = response.data.items.map((video) => Object.assign(video.snippet, video.id))
      this.setState({
        title: title,
        videos: response.data.items.map((video) => Object.assign(video.snippet, video.id))
      })
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchForm onSubmit={this.handleAddTitle.bind(this)}/>
        <NoteLister />
      </div>
    );
  }
}

export default App;
