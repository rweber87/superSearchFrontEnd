import React, { Component } from 'react';
import axios from 'axios'
import SearchForm from './searchForm'
import NavBar from './NavBar'



import NoteLister from './notes/NoteLister'
import PhotoLister from './photos/PhotoLister'
import VideoLister from './videos/VideoLister'
import {getYoutubeVideos, getWikiSummary} from './api'

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
    this.setState({
      title: title
    })

    // getYoutubeVideos(title).then( response => {
    //   let videos = response.data.items.map((video) => Object.assign(video.snippet, video.id))
    //   this.setState({
    //     title: title,
    //     videos: response.data.items.map((video) => Object.assign(video.snippet, video.id))
    //   })
    // })

  }
// console.log(res.data.body)


  componentDidMount(){

    // Gotta filter...
    // .then(data => data.filter(note => this.setState(prevState => {notes: note.search.search_term === prevState.title})))
      
  }

  

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <NavBar />
        <SearchForm onSubmit={this.handleAddTitle.bind(this)}/>

        <div className="row">
          <div className="col-md-6">
            <PhotoLister searchTerm={this.state.title}/>
          </div>
          <div className="col-md-6">
            <VideoLister searchTerm={this.state.title}/>
          </div>
        </div>
        <NoteLister noteTitle={this.state.title}/>
      </div>
    );
  }
}

export default App;
